export const formatNumber = (num = 0) => {
  return num > 999 ? (num/1000).toFixed(1).replace('.0', '') + 'k' : num.toString();
};

export const parseQuery = query => {
  return (query || '')
    .replace(/"/g, '') // remove double quote (ES syntax)
    .replace(/\*/g, '') // remove star (ES syntax)
    .split(/[|+\W]/g) // split on pipe, plus, and space (for highlights)
    .map(part => part.trim()) // remove whitespace
    .filter(Boolean); // remove empty strings
};

export const parseText = (text = '') => {
  return text
    .replace(/&amp;/g, '&'); // replace html entity ampersand with actual ampersand
};

export default {
  formatNumber,
  parseQuery,
  parseText,
};
