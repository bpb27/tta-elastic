const { wrapper } = require('./utils');

const name = 'abortion';
const terms = [
  'abortion*',
  'roe',
];

const body = wrapper(builder => (
  builder
    .orFilter('wildcard', 'text', 'abortion*')
    .orFilter('match', 'text', 'roe')
));

module.exports = { body, name, terms };
