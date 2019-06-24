const getLatestTweets = require('../cron');

describe('cron', () => {
  test('getLatestTweets', (done) => {
    getLatestTweets('realdonaldtrump', (error, tweets) => {
      expect(error).toBeNull();
      expect(Object.keys(tweets)).toHaveLength(100);

      const tweet = Object.values(tweets)[0];

      expect(typeof tweet.id).toEqual('number');
      expect(typeof tweet.favorites).toEqual('number');
      expect(typeof tweet.retweets).toEqual('number');
      expect(typeof tweet.isRetweet).toEqual('boolean');
      expect(typeof tweet.text).toEqual('string');
      expect(typeof tweet.device).toEqual('string');
      expect(typeof tweet.date).toEqual('string');

      expect(tweet.text.length > 0).toEqual(true);
      expect(tweet.device.length > 0).toEqual(true);
      expect(tweet.date.length > 0).toEqual(true);
      done();
    });
  });
});
