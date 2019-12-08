import { parseQuery } from 'utils/query';

describe('query utils', () => {
  describe('parseQuery', () => {
    it('handles empty inputs', () => {
      expect(parseQuery()).toEqual([]);
      expect(parseQuery(undefined)).toEqual([]);
      expect(parseQuery(null)).toEqual([]);
    });

    it('removes stars', () => {
      const result = parseQuery('loser* hater*');
      expect(result).toEqual(['loser', 'hater']);
    });

    it('keeps double-quoted phrases intact', () => {
      const result = parseQuery('"he is a loser"');
      expect(result).toEqual(['he is a loser']);
    });

    it('defaults to regular splitting when an unterminated double-quoted phrase is found', () => {
      const result = parseQuery('"he is a loser');
      expect(result).toEqual(['he', 'is', 'a', 'loser']);
    });

    it('handles a terminated and unterminated double-quoted phrase', () => {
      const result = parseQuery('"he is a loser" "stupid');
      expect(result).toEqual(['he is a loser', 'stupid']);
    });

    it('splits on pipes', () => {
      const result = parseQuery('loser | lobster | hater');
      expect(result).toEqual(['loser', 'lobster', 'hater']);
    });

    it('splits on pluses', () => {
      const result = parseQuery('loser + lobster + hater');
      expect(result).toEqual(['loser', 'lobster', 'hater']);
    });

    it('splits on spaces', () => {
      const result = parseQuery('loser lobster hater');
      expect(result).toEqual(['loser', 'lobster', 'hater']);
    });

    it('trims extra space', () => {
      const result = parseQuery('loser     lobster  hater');
      expect(result).toEqual(['loser', 'lobster', 'hater']);
    });

    it('removes empty space', () => {
      const result = parseQuery('loser "" lobster hater');
      expect(result).toEqual(['loser', 'lobster', 'hater']);
    });

    it('returns expected results when given complicated combinations', () => {
      const one = parseQuery('college* | student* | "student debt" -electoral');
      expect(one).toEqual(['student debt', 'college', 'student', '-electoral']);

      const two = parseQuery('very stable genius + "my I.Q"');
      expect(two).toEqual(['my I.Q', 'very', 'stable', 'genius']);
    });
  });
});
