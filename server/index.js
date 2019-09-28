require('dotenv').config();
const { NODE_ENV, PORT, SEARCHBOX_URL } = process.env;

const express = require('express');
const favicon = require('express-favicon');
const staticGzip = require('express-static-gzip');
const path = require('path');
const { Client } = require('elasticsearch');
const { upload } = require('./upload-tweets');
const getTweets = require('./get-tweets');

const app = express();
const port = PORT || 3000;

const pathDist = path.join(__dirname, '../dist');
const pathPublic = path.join(__dirname, '../public');

const client = new Client({ host: SEARCHBOX_URL });

// ping twitter and upload to ES every minute
if (NODE_ENV === 'prod') {
  setInterval(() => {
    getTweets('realdonaldtrump', (error, tweets) => {
      upload(client, tweets);
    });
  }, 1000 * 60);
}

// serve static assets in dist and public folders
app.use(favicon(`${pathPublic}/favicon.ico`));
app.use(staticGzip(pathDist));
app.use(staticGzip(pathPublic));

// health check route
app.get('/ping', (req, res) => {
  res.send('pong');
});

// deliver react app for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(`${pathDist}/index.html`));
});

// start app
app.listen(port, () => {
  console.log(`running on port ${port}`); // eslint-disable-line no-console
});
