import { percentage } from 'utils/percentage';

describe('percentage util', () => {
  describe('percentage', () => {
    test('rounds a number to two decimals', () => {
      const result = percentage(5, 100000);
      expect(result).toEqual('0.01%');
    });
  });
});
