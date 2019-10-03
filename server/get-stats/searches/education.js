const { bodybuilder, presidentialRange } = require('./utils');

const name = 'education';
const terms = [
  'college*',
  '!electoral',
  'education*',
  'students',
  'teachers',
  'student debt',
  'student loan debt',
];

const body = bodybuilder()
  .andFilter('bool', presidentialRange)
  .orFilter('bool', builder =>
    builder
      .orFilter('wildcard', 'text', 'college*')
      .orFilter('wildcard', 'text', 'education*')
      .orFilter('match', 'text', 'students')
      .orFilter('match', 'text', 'teachers')
      .orFilter('match_phrase', 'text', 'student debt')
      .orFilter('match_phrase', 'text', 'student loan debt')
      .notFilter('match', 'text', 'electoral')
  )
  .build();

module.exports = { body, name, terms };
