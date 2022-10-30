require('dotenv').config();

const request = require('request');
const Twitter = require('twitter');
const { Client } = require('elasticsearch');
const { Pool } = require('pg');
const uploadToES = require('./upload-to-es');
const uploadToPG = require('./upload-to-pg');
const { DATABASE_URL, SEARCHBOX_URL, TWITTER_API_KEY, TWITTER_API_KEY_SECRET } =
  process.env;

const dbString = (value) => {
  const ssl = '?ssl=true&sslmode=require';
  return value.includes(ssl) ? value : `${value}${ssl}`;
};

const client = new Client({ host: SEARCHBOX_URL });
const pool = new Pool({ connectionString: dbString(DATABASE_URL) });

function getTweets(screenName, callback) {
  const credentials = Buffer.from(
    `${TWITTER_API_KEY}:${TWITTER_API_KEY_SECRET}`
  ).toString('base64');
  const requestParams = {
    body: 'grant_type=client_credentials',
    headers: {
      Authorization: `Basic ${credentials}`,
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    },
    method: 'POST',
    url: 'https://api.twitter.com/oauth2/token',
  };

  request(requestParams, (error, response, body) => {
    if (error) return callback(error, null);

    const bearerToken = JSON.parse(body)['access_token'];
    const client = new Twitter({
      consumer_key: TWITTER_API_KEY,
      consumer_secret: TWITTER_API_KEY_SECRET,
      bearer_token: bearerToken,
    });

    // find user id https://tweeterid.com/
    // docs https://developer.twitter.com/en/docs/twitter-api/tweets/timelines/api-reference/get-users-id-tweets#tab2

    const apiUrl =
      'https://api.twitter.com/2/users/25073877/tweets?max_results=100&tweet.fields=created_at%2Cpublic_metrics%2Csource&expansions=referenced_tweets.id&media.fields=public_metrics';

    client.get(apiUrl, {}, (error, tweets) => {
      if (error) return callback(error, null);

      const newTweets = tweets.data.reduce((hash, tweet) => {
        hash[tweet.id] = {
          date: tweet.created_at,
          device: tweet.source,
          favorites: tweet.public_metrics.like_count || 0,
          id: tweet.id,
          isDeleted: false,
          isRetweet: !!(
            tweet.referenced_tweets &&
            tweet.referenced_tweets.find((t) => t.type === 'quoted')
          ),
          retweets: tweet.public_metrics.retweet_count || 0,
          text: tweet.text,
        };
        return hash;
      }, {});

      callback(null, Object.values(newTweets));
    });
  });
}

getTweets('realdonaldtrump', (error, data) => {
  if (error) return console.error('TWITTER FETCH ERROR', error);
  if (data) console.log('TWITTER FETCH SUCCESS', data);
  // uploadToPG(pool, data, tweetsFromPG => uploadToES(client, data, tweetsFromPG));
});
