const { wrapper } = require('./utils');

const name = 'democrats';
const terms = [
  'democrat*',
  'obama*',
  'clinton*',
  'biden*',
  'pelosi*',
  'schumer*',
];

const body = wrapper(builder => (
  builder
    .orFilter('wildcard', 'text', 'democrat*')
    .orFilter('wildcard', 'text', 'obama*')
    .orFilter('wildcard', 'text', 'clinton*')
    .orFilter('wildcard', 'text', 'biden*')
    .orFilter('wildcard', 'text', 'pelosi*')
    .orFilter('wildcard', 'text', 'schumer*')
));

module.exports = { body, name, terms };
