const { wrapper } = require('./utils');

const name = 'trump';

const search = 'trump';

const body = wrapper(builder => (
  builder
    .orFilter('match', 'text', 'trump')
));

module.exports = { body, name, search };
