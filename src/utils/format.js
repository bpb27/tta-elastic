export const formatNumber = (num = 0) => {
  return num > 999 ? (num/1000).toFixed(1).replace('.0', '') + 'k' : num.toString();
};

export const replaceHTMLEntities = (text = '') => {
  return text
    .replace(/&amp;/g, '&'); // replace html entity ampersand with actual ampersand
};
