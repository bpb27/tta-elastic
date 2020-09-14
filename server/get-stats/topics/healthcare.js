const { wrapper } = require('./utils');

const name = 'healthcare';

const search = 'health* | prescription* | obamacare | premiums | deductibles | medicare | medicaid | \\"pre-existing\\"';

const body = wrapper(builder => (
  builder
    .orFilter('wildcard', 'text', 'health*')
    .orFilter('wildcard', 'text', 'prescription*')
    .orFilter('match', 'text', 'obamacare')
    .orFilter('match', 'text', 'premiums')
    .orFilter('match', 'text', 'deductibles')
    .orFilter('match', 'text', 'medicare')
    .orFilter('match', 'text', 'medicaid')
    .orFilter('match_phrase', 'text', 'pre-existing')
));

module.exports = { body, name, search };
