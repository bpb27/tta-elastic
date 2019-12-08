const reTextBetweenDoubleQuotes = new RegExp(/"(.*?)"/g);
const rePipePlusAndSpace = new RegExp(/[|+\s]/g);
const reStars = new RegExp(/\*/g);
const reDoubleQuotes = new RegExp(/"/g);

const cleanStrings = list => {
  return (list || [])
    .map(part => part.trim())
    .filter(Boolean);
};

const removeDoubleQuotes = str => str.replace(reDoubleQuotes, '');

const removeStars = str => str.replace(reStars, '');

export const parseQuery = query => {
  if (!query) return [];

  // remove stars (it's part of the ES syntax)
  query = removeStars(query);

  // pull out double-quoted phrases and remove them from the query string
  const phrases = (query.match(reTextBetweenDoubleQuotes) || []).map(removeDoubleQuotes);
  query = query.replace(reTextBetweenDoubleQuotes, '');
  query = removeDoubleQuotes(query);

  // split on pipes, pluses, and spaces
  const parts = query.split(rePipePlusAndSpace);

  // remove extra whitespace and empty strings, then merge
  return [
    ...cleanStrings(phrases),
    ...cleanStrings(parts),
  ];
};
