const { wrapper } = require('./utils');

const name = 'abortion';

const search = 'abortion | roe';

const terms = [
  'abortion',
  'roe',
];

const body = wrapper(builder => (
  builder
    .orFilter('match', 'text', 'abortion')
    .orFilter('match', 'text', 'roe')
));

module.exports = { body, name, search, terms };
