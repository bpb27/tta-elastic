const { wrapper } = require('./utils');

const name = 'crime';
const terms = [
  'police*',
  'crime',
  'law and order',
];

const body = wrapper(builder => (
  builder
    .orFilter('wildcard', 'text', 'police*')
    .orFilter('match', 'text', 'crime')
    .orFilter('match_phrase', 'text', 'law and order')
));

module.exports = { body, name, terms };
