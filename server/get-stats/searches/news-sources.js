const { wrapper } = require('./utils');

const name = 'newsSources';
const terms = [
  'fox*',
  'cnn',
  'msnbc',
  'nyt',
  'nytimes',
  'new york times',
  'wapo',
  'washington post',
  'washingtonpost',
  'nbc',
  'nbcnews',
  'cbs',
  'cbsnews',
  'abc',
  'abcnews',
  'oann',
];

const body = wrapper(builder => (
  builder
    .orFilter('wildcard', 'text', 'fox*')
    .orFilter('match', 'text', 'cnn')
    .orFilter('match', 'text', 'msnbc')
    .orFilter('match', 'text', 'nyt')
    .orFilter('match', 'text', 'nytimes')
    .orFilter('match_phrase', 'text', 'new york times')
    .orFilter('match', 'text', 'wapo')
    .orFilter('match_phrase', 'text', 'washington post')
    .orFilter('match', 'text', 'washingtonpost')
    .orFilter('match', 'text', 'nbc')
    .orFilter('match', 'text', 'nbcnews')
    .orFilter('match', 'text', 'cbs')
    .orFilter('match', 'text', 'cbsnews')
    .orFilter('match', 'text', 'abc')
    .orFilter('match', 'text', 'abcnews')
    .orFilter('match', 'text', 'oann')
));

module.exports = { body, name, terms };
