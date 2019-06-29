const getTweets = require('./index');

describe('get tweets', () => {
  test('successfully hits the twitter api and parses the response', (done) => {
    getTweets('realdonaldtrump', (error, tweets) => {
      expect(error).toBeNull();
      expect(tweets).toHaveLength(100);

      const tweet = tweets[0];

      expect(typeof tweet.id).toEqual('number');
      expect(typeof tweet.favorites).toEqual('number');
      expect(typeof tweet.retweets).toEqual('number');
      expect(typeof tweet.isRetweet).toEqual('boolean');
      expect(typeof tweet.text).toEqual('string');
      expect(typeof tweet.device).toEqual('string');
      expect(typeof tweet.date).toEqual('number');

      expect(tweet.text.length > 0).toEqual(true);
      expect(tweet.device.length > 0).toEqual(true);
      done();
    });
  });
});
