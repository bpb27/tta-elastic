const { wrapper } = require('./utils');

const name = 'future';
const terms = [
  'artificial intelligence',
  'clean jobs',
  'clean energy',
  'universal basic income',
  'AI',
  'automation',
  'ubi',
  '!Concast',
  '!Reagan',
];

const body = wrapper(builder => (
  builder
    .orFilter('match_phrase', 'text', 'artificial intelligence')
    .orFilter('match_phrase', 'text', 'clean jobs')
    .orFilter('match_phrase', 'text', 'clean energy')
    .orFilter('match_phrase', 'text', 'universal basic income')
    .orFilter('match', 'text', 'AI')
    .orFilter('match', 'text', 'automation')
    .orFilter('match', 'text', 'ubi')
    .notFilter('match', 'text', 'Concast')
    .notFilter('match', 'text', ' Reagan')
));

module.exports = { body, name, terms };
