const { wrapper } = require('./utils');

const name = 'healthcare';
const terms = [
  'health*',
  'prescription*',
  'obamacare',
  'premiums',
  'deductibles',
  'pre-existing',
  'medicare',
  'medicaid',
];

const body = wrapper(builder => (
  builder
    .orFilter('wildcard', 'text', 'health*')
    .orFilter('wildcard', 'text', 'prescription*')
    .orFilter('match', 'text', 'obamacare')
    .orFilter('match', 'text', 'premiums')
    .orFilter('match', 'text', 'deductibles')
    .orFilter('match', 'text', 'pre-existing')
    .orFilter('match', 'text', 'medicare')
    .orFilter('match', 'text', 'medicaid')
));

module.exports = { body, name, terms };
