const { wrapper } = require('./utils');

const name = 'taxes';
const terms = [
  'tax*',
];

const body = wrapper(builder => (
  builder
    .orFilter('wildcard', 'text', 'tax*')
));

module.exports = { body, name, terms };
