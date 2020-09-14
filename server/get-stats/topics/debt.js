const { wrapper } = require('./utils');

const name = 'debt';

const search = 'debt | deficit';

const body = wrapper(builder => (
  builder
    .orFilter('match', 'text', 'debt')
    .orFilter('match', 'text', 'deficit')
));

module.exports = { body, name, search };
