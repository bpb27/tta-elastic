import { queryParams } from 'utils/navigation';

describe('navigation utils', () => {
  describe('queryParams', () => {
    it('parses the url and returns an object', () => {
      const url = 'https://trump-twitter-archive.herokuapp.com/?searchbox=%22loser+%7C+losers%22&retweet=%5B%22Hide+Retweets%22%5D&results=1';
      const result = queryParams(url);
      expect(result.results).toEqual('1');
      expect(result.retweet).toEqual('["Hide Retweets"]');
      expect(result.searchbox).toEqual('"loser | losers"');
    });
  });
});
