const { wrapper } = require('./utils');

const name = 'trade';
const terms = [
  'tariff*',
  'trade',
  'WTO',
];

const body = wrapper(builder => (
  builder
    .orFilter('wildcard', 'text', 'tariff*')
    .orFilter('match', 'text', 'trade')
    .orFilter('match', 'text', 'wto')
));

module.exports = { body, name, terms };
