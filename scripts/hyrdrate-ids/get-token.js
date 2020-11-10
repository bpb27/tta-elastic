require('dotenv').config();

const request = require('request');
const Twitter = require('twitter');
const { TWITTER_CONSUMER_KEY, TWITTER_CONSUMER_SECRET } = process.env;

function getToken (callback) {
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
    if (error) return callback(error, null);

    const bearerToken = JSON.parse(body)['access_token'];
    const client = new Twitter({
      consumer_key: TWITTER_CONSUMER_KEY,
      consumer_secret: TWITTER_CONSUMER_SECRET,
      bearer_token: bearerToken
    });

    return callback(null, client);
  });
}

module.exports = getToken;
