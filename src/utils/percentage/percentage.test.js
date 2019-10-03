import { percentage } from './index';

describe('percentage util', () => {
  describe('percentage', () => {
    test('rounds a number to two decimals', () => {
      const result = percentage(5, 100000);
      expect(result).toEqual('0.01%');
    });
  });
});
