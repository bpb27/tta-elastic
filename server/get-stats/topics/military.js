const { wrapper } = require('./utils');

const name = 'military';

const search = 'vets | veterans | military';

const body = wrapper(builder => (
  builder
    .orFilter('match', 'text', 'vets')
    .orFilter('match', 'text', 'veterans')
    .orFilter('match', 'text', 'military')
));

module.exports = { body, name, search };
