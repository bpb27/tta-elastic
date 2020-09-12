const { wrapper } = require('./utils');

const name = 'approval';

const search = 'poll* | rating* | crowd* | ovation* | cheer* | approval | rated';

const terms = [
  'poll*',
  'rating*',
  'crowd*',
  'ovation*',
  'cheer*',
  'approval',
  'rated',
];

const body = wrapper(builder => (
  builder
    .orFilter('wildcard', 'text', 'poll*')
    .orFilter('wildcard', 'text', 'rating*')
    .orFilter('wildcard', 'text', 'crowd*')
    .orFilter('wildcard', 'text', 'ovation*')
    .orFilter('wildcard', 'text', 'cheer*')
    .orFilter('match', 'text', 'approval')
    .orFilter('match', 'text', 'rated')
));

module.exports = { body, name, search, terms };
