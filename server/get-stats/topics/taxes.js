const { wrapper } = require('./utils');

const name = 'taxes';

const search = 'tax*';

const body = wrapper(builder => (
  builder
    .orFilter('wildcard', 'text', 'tax*')
));

module.exports = { body, name, search };
