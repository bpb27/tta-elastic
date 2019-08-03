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
const upload = (client, tweets) => {
  const mapped = preparePayload(tweets);
  client.bulk(mapped, (error, response) => {
    if (error) {
      console.log('error uploading: ', error);
    } else if (response && response.errors) {
      console.log('error uploading, check the response', response.items ? response.items[0] : null);
    } else {
      console.log(`successfully uploaded in ${response.took}ms`);
    }
  });
};

/* eslint-disable no-console */

module.exports = { preparePayload, upload };
