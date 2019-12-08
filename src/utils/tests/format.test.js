import { formatNumber, replaceHTMLEntities } from 'utils/format';

describe('format utils', () => {
  describe('formats numbers', () => {
    it('handles no input', () => {
      expect(formatNumber()).toEqual('0');
    });

    it('handles 0 without any special formatting', () => {
      expect(formatNumber(0)).toEqual('0');
    });

    it('handles 999 without any special formatting', () => {
      expect(formatNumber(999)).toEqual('999');
    });

    it('handles 1000 and formats with a k', () => {
      expect(formatNumber(1000)).toEqual('1k');
    });

    it('handles 2222 and formats with a k and decimal', () => {
      expect(formatNumber(2222)).toEqual('2.2k');
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
});
