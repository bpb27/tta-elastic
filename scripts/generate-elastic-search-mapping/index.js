require('dotenv').config();
const { Client } = require('elasticsearch');
const client = new Client({ host: process.env.SEARCHBOX_URL });

async function putMapping () {
  const mapping = {
    index: 'tweets',
    type: 'document',
    body: {
      properties: {
        date: { type: 'long' },
        device: {
          type: 'keyword',
          fields: {
            keyword: {
              type: 'keyword',
              ignore_above: 256,
            },
          },
        },
        favorites: { type: 'long' },
        id: { type: 'text' },
        isRetweet: { type: 'boolean' },
        retweets: { type: 'long' },
        text: {
          type: 'text',
          fields: {
            keyword: {
              type: 'keyword',
              ignore_above: 256,
            },
          },
        },
      },
    },
  };

  client.indices.putMapping(mapping, (err, resp, status) => {
    if (err) {
      console.error(err, status); // eslint-disable-line no-console
    } else {
      console.log('success', status, resp); // eslint-disable-line no-console
    }
  });
}

putMapping();
