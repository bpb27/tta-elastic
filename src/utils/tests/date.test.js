import {
  daysAsPresident,
  trimTime,
  utcTimestampToEST,
  validDatestring,
} from 'utils/date';

describe('date utils', () => {
  describe.skip('daysAsPresident', () => {
    it('returns the days between inauguration and now', () => {
      const result = daysAsPresident();
      expect(result).toBeGreaterThan(1200);
      expect(result).toBeLessThan(1440); // end of first term
    });
  });

  describe('utcTimestampToEST', () => {
    it('creates a formatted string', () => {
      const result = utcTimestampToEST(1569705285000);
      expect(result).toEqual('Sep 28th 2019 - 5:14:45 PM EST');
    });

    it('creates a trim formatted string', () => {
      const result = utcTimestampToEST(1569705285000, { timeTrim: true });
      expect(result).toEqual('Sep 28 2019 - 5:14pm');
    });
  });

  describe('validDatestring', () => {
    it('returns true when the string is valid', () => {
      const result = validDatestring('2020-01-01');
      expect(result).toEqual(true);
    });

    it('returns true false when the string is valid', () => {
      const result = validDatestring('2020-01-0');
      expect(result).toEqual(false);
    });
  });

  describe('trimTime', () => {
    it('trims a double-digit hour', () => {
      expect(trimTime('11:01:02 AM')).toEqual('11:01am');
    });

    it('trims a single-digit hour', () => {
      expect(trimTime('1:01:02 PM')).toEqual('1:01pm');
    });
  });
});
