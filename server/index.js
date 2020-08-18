require('dotenv').config();
const { DATABASE_URL, NODE_ENV, PORT, SEARCHBOX_URL } = process.env;

const express = require('express');
const favicon = require('express-favicon');
const staticGzip = require('express-static-gzip');
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
const cache = new NodeCache();
const client = new Client({ host: SEARCHBOX_URL });
const pool = new Pool({ connectionString: dbString(DATABASE_URL) });
const pathDist = path.join(__dirname, '../dist');
const pathPublic = path.join(__dirname, '../public');

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

// security headers
// app.use(helmet.contentSecurityPolicy()); // need to whitelist a number of scripts and styles
app.use(helmet.dnsPrefetchControl());
app.use(helmet.expectCt());
app.use(helmet.frameguard());
app.use(helmet.hidePoweredBy());
app.use(helmet.hsts());
app.use(helmet.ieNoOpen());
app.use(helmet.noSniff());
app.use(helmet.permittedCrossDomainPolicies());
app.use(helmet.referrerPolicy());
app.use(helmet.xssFilter());

// serve static assets in dist and public folders
app.use(favicon(`${pathPublic}/favicon.ico`));
app.use(staticGzip(pathDist));
app.use(staticGzip(pathPublic));

// health check route
app.get('/ping', (req, res) => {
  res.send('pong');
});

// tweet stats route with cache
app.get('/stats', async (req, res) => {
  const cachedStats = cache.get('stats');
  if (cachedStats) {
    res.json(cachedStats);
  } else {
    const freshStats = await getStats();
    cache.set('stats', freshStats, 7200); // TTL 2 hours (60 * 60 * 2)
    res.json(freshStats);
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
