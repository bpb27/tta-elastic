const { wrapper } = require('./utils');

const name = 'covid';

const search = 'covid* | virus | coronavirus';

const body = wrapper(builder => (
  builder
    .orFilter('wildcard', 'text', 'covid*')
    .orFilter('match', 'text', 'virus')
    .orFilter('match', 'text', 'coronavirus')
));

module.exports = { body, name, search };
