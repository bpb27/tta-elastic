import { tweetLink } from 'utils/links';

describe('link utils', () => {
  test('tweetLink creates a link to a trump tweet on twitter', () => {
    const result = tweetLink(1);
    expect(result).toEqual('https://twitter.com/realdonaldtrump/status/1');
  });
});
