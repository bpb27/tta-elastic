require('dotenv').config();

const request = require('request');
const csv = require('csvtojson');
const path = require('path');
const { Client } = require('elasticsearch');
const { Pool } = require('pg');
const getToken = require('./get-token');
const uploadToES = require('./upload-to-es');
const uploadToPG = require('./upload-to-pg');
const { DATABASE_URL, SEARCHBOX_URL } = process.env;

const dbString = value => {
  const ssl = '?ssl=true&sslmode=require';
  return value.includes(ssl) ? value : `${value}${ssl}`;
};

const client = new Client({ host: SEARCHBOX_URL });
const pool = new Pool({ connectionString: dbString(DATABASE_URL) });

function getTweets (client, ids, callback) {
  client.get(`statuses/lookup.json?id=${ids}&trim_user=1`, (error, tweets) => {
    if (error) return callback(error, null);

    const newTweets = tweets.reduce((hash, tweet) => {
      hash[tweet.id_str] = {
        date: tweet.created_at,
        device: tweet.source.split('>')[1].split('<')[0],
        favorites: tweet.favorite_count,
        id: tweet.id_str,
        isDeleted: false,
        isRetweet: (tweet.full_text || tweet.text).substr(0,3) === 'RT ',
        retweets: tweet.retweet_count,
        text: tweet.full_text || tweet.text,
      };
      return hash;
    }, {});

    callback(null, Object.values(newTweets));
  });
}

const run = async () => {
  const ids = await csv().fromFile(path.join(__dirname, './tweets_ids.csv'));

  getToken((error, twitterClient) => {
    if (error) return console.log(error);
    looper(twitterClient, ids);
  });
};

const looper = (twitterClient, ids) => {
  let s = 300;
  let e = 400;
  let interval = setInterval(() => {
    if (e > 55400) {
      clearInterval(interval);
      console.log('done');
    } else {
      s = s + 100;
      e = e + 100;
      console.log(s, e);
      const idSet = ids.slice(s, e).map(({ id }) => id).join(',');
      getTweets(twitterClient, idSet, (error, data) => {
        if (error) return console.error('TWITTER FETCH ERROR', error);
        console.log(data.length, data[0]);
        uploadToPG(pool, data, tweetsFromPG => uploadToES(client, data, tweetsFromPG));
      });
    }
  }, 10000);
};

run();
