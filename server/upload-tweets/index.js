const preparePayload = tweets => {
  const payload = [];

  tweets.forEach(tweet => {
    payload.push({
      index: {
        _index: 'trump',
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
    // TODO: also check response.errors
    if (error) {
      console.log('error uploading: ', error);
    } else {
      console.log(`successfully uploaded in ${response.took}ms`, response);
    }
  });
};

/* eslint-disable no-console */

module.exports = { preparePayload, upload };
