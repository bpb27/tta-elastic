const { bodybuilder, presidentialRange } = require('./utils');

const name = 'collusion';
const terms = [
  'hoax*',
  'russia*',
  'witch hunt*',
  'collusion*',
  'mueller*',
  'dossier',
  'steele',
  'Fusion GPS',
];

const body = bodybuilder()
  .andFilter('bool', presidentialRange)
  .orFilter('bool', builder =>
    builder
      .orFilter('wildcard', 'text', 'hoax*')
      .orFilter('wildcard', 'text', 'russia*')
      .orFilter('wildcard', 'text', 'witch hunt*')
      .orFilter('wildcard', 'text', 'collusion*')
      .orFilter('wildcard', 'text', 'mueller*')
      .orFilter('wildcard', 'text', 'dossier')
      .orFilter('match', 'text', 'steele')
      .orFilter('match', 'text', 'Fusion GPS')
  )
  .build();

module.exports = { body, name, terms };
