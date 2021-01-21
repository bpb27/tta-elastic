require('dotenv').config();

const request = require('request');
const Twitter = require('twitter');
const messages = require('./messages');
const { TWITTER_CONSUMER_KEY, TWITTER_CONSUMER_SECRET } = process.env;

function getTweets (screenName, callback) {
  const credentials = Buffer.from(`${TWITTER_CONSUMER_KEY}:${TWITTER_CONSUMER_SECRET}`).toString('base64');
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
    if (error) return callback({ error, message: messages.fetches.twBearer }, null);

    const bearerToken = JSON.parse(body)['access_token'];
    const client = new Twitter({
      consumer_key: TWITTER_CONSUMER_KEY,
      consumer_secret: TWITTER_CONSUMER_SECRET,
      bearer_token: bearerToken
    });

    const params = {
      count: 100,
      screen_name: screenName,
      trim_user: true,
      tweet_mode: 'extended',
    };

    client.get('statuses/user_timeline', params, (error, tweets) => {
      if (error) return callback({ error, message: messages.fetches.twTimeline }, null);

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

  });
}

module.exports = getTweets;
