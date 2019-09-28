import {
  twoDaysFromNow,
  utcTimestampToEST,
} from './index';

describe('date utils', () => {
  describe('utcTimestampToEST', () => {
    it('creates a formatted string', () => {
      const result = utcTimestampToEST(1569705285000);
      expect(result).toEqual('Sep 28 2019, 5:14:45 PM EST');
    });
  });

  describe('twoDaysFromNow', () => {
    it('returns a future date', () => {
      const result = twoDaysFromNow();
      const currentDate = new Date();
      const distantFutureDate = new Date('2030-01-01');
      expect(result > currentDate).toEqual(true);
      expect(result < distantFutureDate).toEqual(true);
    });
  });
});
