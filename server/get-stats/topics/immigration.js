const { wrapper } = require('./utils');

const name = 'immigration';
const terms = [
  'immigrant*',
  'border*',
  'immigration',
  'the wall',
];

const body = wrapper(builder => (
  builder
    .orFilter('wildcard', 'text', 'immigrant*')
    .orFilter('wildcard', 'text', 'border*')
    .orFilter('match', 'text', 'immigration')
    .orFilter('match_phrase', 'text', 'the wall')
));

module.exports = { body, name, terms };
