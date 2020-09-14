const { wrapper } = require('./utils');

const name = 'stocks';

const search = 'stock* | market | dow | nasdaq';

const body = wrapper(builder => (
  builder
    .orFilter('wildcard', 'text', 'stock*')
    .orFilter('match', 'text', 'market')
    .orFilter('match', 'text', 'dow')
    .orFilter('match', 'text', 'nasdaq')
));

module.exports = { body, name, search };
