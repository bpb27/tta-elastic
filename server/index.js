require('dotenv').config();
const { NODE_ENV, PORT, SEARCHBOX_URL } = process.env;

const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const { Client } = require('elasticsearch');
const { upload } = require('./upload-tweets');
const getTweets = require('./get-tweets');

const app = express();
const port = PORT || 3000;

const hostedPath = path.join(__dirname, '../dist');
const client = new Client({ host: SEARCHBOX_URL });

if (NODE_ENV !== 'dev') {
  app.use(favicon(hostedPath + '/favicon.ico'));
}

app.use(express.static(hostedPath));

app.get('/latest-tweets', (req, res) => {
  try {
    getTweets('realdonaldtrump', (error, tweets) => {
      upload(client, tweets);
      res.json(error || tweets);
    });
  } catch (e) {
    res.send(e);
  }
});

app.get('/ping', (req, res) => {
  res.send('pong');
});

app.get('*', (req, res) => {
  res.sendFile(path.join(hostedPath + 'index.html'));
});

app.listen(port, () => {
  console.log(`running on port ${port}`); // eslint-disable-line no-console
});
