require('dotenv').config();
const { DATABASE_URL, NODE_ENV, PORT, SEARCHBOX_URL } = process.env;

const express = require('express');
const favicon = require('express-favicon');
const staticGzip = require('express-static-gzip');
const rateLimit = require('express-rate-limit');
const sslRedirect = require('heroku-ssl-redirect').default;
const cors = require('cors');
const path = require('path');
const helmet = require('helmet');
const { Client } = require('elasticsearch');
const { Pool } = require('pg');
const NodeCache = require('node-cache');
const uploadToElastic = require('./upload-tweets-es');
const uploadToDatabase = require('./upload-tweets-pg');
const getStats = require('./get-stats');
const getTweets = require('./get-tweets');
const { dbString, logger } = require('./utils');

const app = express();
const port = PORT || 3000;
const isProd = NODE_ENV === 'prod';
const cache = new NodeCache();
const client = new Client({ host: SEARCHBOX_URL });
const pool = new Pool({ connectionString: dbString(DATABASE_URL) });
const pathDist = path.join(__dirname, '../dist');
const pathPublic = path.join(__dirname, '../public');
const rateLimitSearch = rateLimit({ max: 25, windowMs: 15 * 60 * 1000 }); // 15 min

// check for latest tweets and upload to ES & PG every minute
if (NODE_ENV === 'prod') {
  setInterval(() => {
    getTweets('realdonaldtrump', (error, tweets) => {
      try {
        uploadToElastic(client, logger, tweets);
      } catch (e) {
        logger.error('Failed uploading to ES', e);
      }

      try {
        uploadToDatabase(pool, logger, tweets);
      } catch (e) {
        logger.error('Failed uploading to PG', e);
      }
    });
  }, 1000 * 60);
}

// heroku
app.set('trust proxy', 1); // heroku
app.use(sslRedirect());

// security headers
app.use(helmet.dnsPrefetchControl());
app.use(helmet.expectCt());
app.use(helmet.frameguard());
app.use(helmet.hidePoweredBy());
app.use(helmet.hsts());
app.use(helmet.ieNoOpen());
app.use(helmet.permittedCrossDomainPolicies());
app.use(helmet.referrerPolicy());
app.use(helmet.xssFilter());
// app.use(helmet.noSniff()); // seems to cause problems with react suspense js snippets
// app.use(helmet.contentSecurityPolicy()); // need to whitelist a number of scripts and styles

// serve static assets in dist and public folders
app.use(favicon(`${pathPublic}/favicon.ico`));
app.use(staticGzip(pathDist));
app.use(staticGzip(pathPublic));

// disable CORS restriction in dev mode
if (!isProd) app.use(cors());

// health check route
app.get('/ping', (req, res) => {
  res.send('pong');
});

// tweet stats route with cache
app.get('/stats', async (req, res) => {
  const cachedStats = cache.get('stats');
  if (cachedStats && isProd) {
    res.json(cachedStats);
  } else {
    const freshStats = await getStats(pool);
    cache.set('stats', freshStats, 7200); // TTL 2 hours (60 * 60 * 2)
    res.json(freshStats);
  }
});

app.get('/latest-tweets', async (req, res) => {
  const cached = cache.get('latest');
  if (cached && isProd) {
    res.json(cached);
  } else {
    const fresh = await pool.query('SELECT * FROM "tweets" ORDER BY "date" DESC LIMIT 1000');
    cache.set('latest', fresh.rows, 1800); // TTL 30 min (60 * 30)
    res.json(fresh.rows);
  }
});

app.get('/search-tweets/:term/:offset', rateLimitSearch, async (req, res) => {
  try {
    const { term, offset } = req.params;

    const total = await pool.query(`
      SELECT count(id) FROM "tweets"
      WHERE text like '%${term.replace(/[^a-z0-9]/gi, '')}%'
    `);

    const results = await pool.query(`
      SELECT * FROM "tweets"
      WHERE text like '%${term.replace(/[^a-z0-9]/gi, '')}%'
      ORDER BY "date"
      DESC
      LIMIT 25
      OFFSET ${offset.replace(/[^0-9]/gi, '')}
    `);

    res.json({ results: results.rows, total: total.rows[0].count });
  } catch (e) {
    res.sendStatus(401);
  }
});

// deliver react app for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(`${pathDist}/index.html`));
});

// start app
app.listen(port, () => {
  logger.success(`running on port ${port}`);
});
