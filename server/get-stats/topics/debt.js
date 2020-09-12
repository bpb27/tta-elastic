const { wrapper } = require('./utils');

const name = 'debt';
const terms = [
  'debt',
  'deficit',
];

const body = wrapper(builder => (
  builder
    .orFilter('match', 'text', 'debt')
    .orFilter('match', 'text', 'deficit')
));

module.exports = { body, name, terms };
