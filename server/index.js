require('dotenv').config();
const { NODE_ENV, PORT } = process.env;

const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const { Client } = require('elasticsearch');
const getTweets = require('./get-tweets');
const { upload: uploadTweets } = require('./upload-tweets');

const port = PORT || 3000;
const app = express();
const client = new Client({ host: process.env.SEARCHBOX_URL });

if (NODE_ENV !== 'dev') app.use(favicon(__dirname + '/dist/favicon.ico'));
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'dist')));

app.get('/latest-tweets', (req, res) => {
  try {
    getTweets('realdonaldtrump', (error, tweets) => {
      uploadTweets(client, tweets);
      res.json(error || tweets);
    });
  } catch (e) {
    res.send(e);
  }
});

app.get('/ping', (req, res) => res.send('pong'));

app.get('/*', (req, res) => res.sendFile(path.join(__dirname, 'dist', 'index.html')));

app.listen(port, () => console.log(`running on port ${port}`)); // eslint-disable-line no-console
