const { wrapper } = require('./utils');

const name = 'collusion';
const terms = [
  'hoax*',
  'russia*',
  'witch hunt*',
  'collusion*',
  'mueller*',
  'impeach*',
  'dossier',
  'steele',
  'Schiff',
  'Putin',
  'quid',
];

const body = wrapper(builder => (
  builder
    .orFilter('wildcard', 'text', 'hoax*')
    .orFilter('wildcard', 'text', 'russia*')
    .orFilter('wildcard', 'text', 'witch hunt*')
    .orFilter('wildcard', 'text', 'collusion*')
    .orFilter('wildcard', 'text', 'mueller*')
    .orFilter('wildcard', 'text', 'impeach*')
    .orFilter('match', 'text', 'dossier')
    .orFilter('match', 'text', 'steele')
    .orFilter('match', 'text', 'schiff')
    .orFilter('match', 'text', 'putin')
    .orFilter('match', 'text', 'quid')
));

module.exports = { body, name, terms };
