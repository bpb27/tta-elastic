require('dotenv').config();

const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const getLatestTweets = require('./cron');
const port = process.env.PORT || 3000;
const app = express();

app.use(favicon(__dirname + '/dist/favicon.ico'));
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'dist')));

app.get('/latest-tweets', (req, res) => {
  try {
    getLatestTweets('realdonaldtrump', (error, tweets) => res.json(error || tweets));
  } catch (e) {
    res.send(e);
  }
});

app.get('/ping', (req, res) => res.send('pong'));

app.get('/*', (req, res) => res.sendFile(path.join(__dirname, 'dist', 'index.html')));

app.listen(port, () => console.log(`running on port ${port}`)); // eslint-disable-line no-console
