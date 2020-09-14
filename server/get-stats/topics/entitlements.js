const { wrapper } = require('./utils');

const name = 'entitlements';

const search = '\\"social security\\" | medicare | medicaid';

const body = wrapper(builder => (
  builder
    .orFilter('match_phrase', 'text', 'social security')
    .orFilter('match', 'text', 'medicare')
    .orFilter('match', 'text', 'medicaid')
));

module.exports = { body, name, search };
