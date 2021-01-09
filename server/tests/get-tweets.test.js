const getTweets = require('../get-tweets');

describe.skip('get tweets', () => {
  let error;
  let tweets;
  let tweet;

  beforeAll((done) => {
    getTweets('realdonaldtrump', (responseError, responseData) => {
      error = responseError;
      tweets = responseData;
      tweet = responseData[0];
      done();
    });
  });

  describe('hitting the twitter API', () => {
    it('does not error', () => {
      expect(error).toBeNull();
    });

    it('returns a list of tweets', () => {
      expect(Array.isArray(tweets)).toEqual(true);
    });
  });

  describe('parsing the response from twitter', () => {
    describe('the date value (the date the tweet was sent)', () => {
      it('is a string', () => {
        expect(typeof tweet.date).toEqual('string');
      });

      it('is a valid JS timestamp', () => {
        const year = new Date(tweet.date).getFullYear();
        expect(year).toBeGreaterThan(2009);
        expect(year).toBeLessThan(2025);
      });
    });

    describe('the device value (the device the tweet was sent from)', () => {
      it('is a string', () => {
        expect(typeof tweet.device).toEqual('string');
      });

      it('has some value', () => {
        expect(tweet.device.length).toBeGreaterThan(3);
      });
    });

    describe('the favorites value (the number of times the tweet has been favorited)', () => {
      it('is a number', () => {
        expect(typeof tweet.favorites).toEqual('number');
      });
    });

    describe('the id value (the id of the tweet used for linking)', () => {
      it('is a string', () => {
        expect(typeof tweet.id).toEqual('string');
      });

      it('has some value', () => {
        expect(tweet.id.length).toBeGreaterThan(0);
      });
    });

    describe('the isRetweet value (whether the tweet is an original or a retweet)', () => {
      it('is a boolean', () => {
        expect(typeof tweet.isRetweet).toEqual('boolean');
      });
    });

    describe('the isDeleted value (will always be false when pulling from the API)', () => {
      it('is false', () => {
        expect(tweet.isDeleted).toEqual(false);
      });
    });

    describe('the retweets value (the number of times the tweet has been retweeted)', () => {
      it('is a number', () => {
        expect(typeof tweet.retweets).toEqual('number');
      });
    });

    describe('the text value (the text of the tweet)', () => {
      it('is a string', () => {
        expect(typeof tweet.text).toEqual('string');
      });

      it('has some value', () => {
        expect(tweet.text.length).toBeGreaterThan(0);
      });
    });
  });
});
