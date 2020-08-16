import {
  numberWithCommas,
  numberWithKs,
  replaceHTMLEntities,
} from 'utils/format';

describe('format utils', () => {
  describe('formats numbers', () => {
    it('handles no input', () => {
      expect(numberWithKs()).toEqual('0');
    });

    it('handles 0 without any special formatting', () => {
      expect(numberWithKs(0)).toEqual('0');
    });

    it('handles 999 without any special formatting', () => {
      expect(numberWithKs(999)).toEqual('999');
    });

    it('handles 1000 and formats with a k', () => {
      expect(numberWithKs(1000)).toEqual('1k');
    });

    it('handles 2222 and formats with a k and decimal', () => {
      expect(numberWithKs(2222)).toEqual('2.2k');
    });
  });

  describe('replacing HTML entities in a text sting', () => {
    it('handles no input', () => {
      expect(replaceHTMLEntities()).toEqual('');
    });

    it('replaces the html entity ampersand with a real ampersand', () => {
      expect(replaceHTMLEntities('this &amp; that &amp; them')).toEqual('this & that & them');
    });
  });

  describe('adds commas to a number', () => {
    it('handles no input', () => {
      expect(numberWithCommas()).toEqual('0');
    });

    it('handles 3 digits', () => {
      expect(numberWithCommas(100)).toEqual('100');
    });

    it('handles 4 digits', () => {
      expect(numberWithCommas(1000)).toEqual('1,000');
    });

    it('handles 5 digits', () => {
      expect(numberWithCommas(10000)).toEqual('10,000');
    });
  });
});
