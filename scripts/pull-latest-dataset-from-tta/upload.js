require('dotenv').config();
const { Client } = require('elasticsearch');
const client = new Client({ host: process.env.SEARCHBOX_URL });

const preparePayload = tweets => {
  const payload = [];

  tweets.forEach(tweet => {
    payload.push({
      index: {
        _index: 'tweets',
        _type: 'document',
        _id: tweet.id,
      },
    });
    payload.push(tweet);
  });

  return { body: payload };
};

/* eslint-disable no-console */
const upload = tweets => {
  return new Promise(function (resolve, reject) {
    const mapped = preparePayload(tweets);
    client.bulk(mapped, (error, response) => {
      if (error) {
        reject(error);
      } else if (response && response.errors) {
        reject('error in response, run with debugger to view');
      } else {
        console.log(`successfully uploaded in ${response.took}ms`);
        resolve();
      }
    });
  });
};

module.exports = upload;
