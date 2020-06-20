import findTweet from 'utils/data';

describe('data utils', () => {
  it('returns a tweet', () => {
    const result = findTweet('808638507161882624');
    expect(result).toBeDefined();
    expect(result.id).toBeDefined();
  });
});
