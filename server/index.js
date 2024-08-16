import dotenv from 'dotenv';
import express from 'express';
import favicon from 'express-favicon';
import staticGzip from 'express-static-gzip';
import sslRedirect from 'heroku-ssl-redirect';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import helmet from 'helmet';
import es from 'elasticsearch';
import pg from 'pg';
import NodeCache from 'node-cache';
import { getStats } from './get-stats/index.js';
import { getTweets } from './get-tweets.js';
import { uploadToElastic } from './upload-tweets-es.js';
import { uploadToDatabase } from './upload-tweets-pg.js';
import { dbString, logger, tableName } from './utils.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const { DATABASE_URL, NODE_ENV, PORT, SEARCHBOX_URL } = process.env;

const app = express();
const port = PORT || 3000;
const isProd = NODE_ENV === 'prod';
const cache = new NodeCache();
const client = new es.Client({ host: SEARCHBOX_URL });
const pool = new pg.Pool({ connectionString: dbString(DATABASE_URL) });
const pathDist = path.join(__dirname, '../dist');
const pathPublic = path.join(__dirname, '../public');

// check for latest tweets and upload to PG & ES every minute
const off = true;
if (NODE_ENV === 'prod' && !off) {
  setInterval(() => {
    getTweets('realdonaldtrump', (error, tweets) => {
      try {
        uploadToDatabase(pool, logger, tweets, newDataFromPG => {
          uploadToElastic(client, logger, newDataFromPG);
        });
      } catch (e) {
        logger.error('Failed uploading to PG', e);
      }
    });
  }, 1000 * 60);
}

// security headers
app.use(sslRedirect.default());
app.use(helmet.dnsPrefetchControl());
app.use(helmet.frameguard());
app.use(helmet.hidePoweredBy());
app.use(helmet.hsts());
app.use(helmet.ieNoOpen());
app.use(helmet.permittedCrossDomainPolicies());
app.use(helmet.referrerPolicy());
app.use(helmet.xssFilter());
// app.use(helmet.contentSecurityPolicy()); // need to whitelist a number of scripts and styles
// app.use(helmet.noSniff()); // seems to cause problems with react suspense js snippets

// serve static assets in dist and public folders
app.use(favicon(`${pathPublic}/favicon.ico`));
app.use(express.static(pathDist));
app.use(express.static(pathPublic));
// app.use(staticGzip(pathDist));
// app.use(staticGzip(pathPublic));

// disable CORS restriction in dev mode
if (!isProd) app.use(cors());

// health check route
app.get('/ping', (req, res) => {
  res.send('pong');
});

// tweet stats route with cache
app.get('/stats', cors(), async (req, res) => {
  try {
    const cachedStats = cache.get('stats');
    if (cachedStats && isProd) {
      res.json(cachedStats);
    } else {
      const freshStats = await getStats(pool);
      cache.set('stats', freshStats, 7200); // TTL 2 hours (60 * 60 * 2)
      res.json(freshStats);
    }
  } catch (e) {
    logger.error(`/stats route error ${e}`);
    res.json({});
  }
});

// latest 1000 tweets route
app.get('/latest-tweets', cors(), async (req, res) => {
  try {
    const cached = cache.get('latest');
    if (cached && isProd) {
      res.json(cached);
    } else {
      const fresh = await pool.query(
        `SELECT * FROM "${tableName}" ORDER BY "date" DESC LIMIT 1000`
      );
      cache.set('latest', fresh.rows, 1800); // TTL 30 min (60 * 30)
      res.json(fresh.rows);
    }
  } catch (e) {
    logger.error(`/latest-tweets route error ${e}`);
    res.json({});
  }
});

// tweet by id route
app.get('/tweets/:id', cors(), async (req, res) => {
  try {
    const id = req.params.id.replace(/[^\d.-]/g, '');
    const cacheKey = `tweet-${id}`;
    const cached = cache.get(cacheKey);

    if (cached && isProd) {
      res.json(cached);
    } else {
      const result = await pool.query(`SELECT * FROM "${tableName}" WHERE id = '${id}'`);
      const tweet = result.rows[0];
      if (tweet) {
        cache.set(cacheKey, tweet, 86400); // TTL 24 hours (60 * 60 * 24)
        res.json(tweet);
      } else {
        res.status(404).send('Tweet not found');
      }
    }
  } catch (e) {
    logger.error(`/tweets/:id route error ${e}`);
    res.json({});
  }
});

// deliver react app for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(`${pathDist}/index.html`));
});

// start app
app.listen(port, () => {
  logger.success(`running on port ${port}, isProd ${isProd}`);
});
