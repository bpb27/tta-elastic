const INDEX_NAME = 'trump_tweets';
const moment = require('moment');

moment.suppressDeprecationWarnings = true;

const preparePayload = tweets => {
  if (INDEX_NAME === 'tweets') throw new Error('Do not use that index name bruh');

  const payload = [];
  tweets.forEach(tweet => {
    payload.push({
      update: {
        _index: INDEX_NAME,
        _type: 'document',
        _id: tweet.id,
      },
    });
    payload.push({
      doc: {
        text: tweet.text,
      },
    });
  });

  return { body: payload };
};

const upload = (client, tweets) => {
  const mapped = preparePayload(tweets);

  client.bulk(mapped, (error, response) => {
    if (error) {
      console.error('ES UPLOAD ERROR', error);
    } else if (response && response.errors) {
      console.error('ES UPLOAD ERROR', response.items ? response.items[0] : null);
    } else {
      console.log('ES upload success');
    }
  });
};

module.exports = upload;
