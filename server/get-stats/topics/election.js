const { wrapper } = require('./utils');

const name = 'election';

const search = 'election* | absentee | rigged | electoral | ballot | postal | \\"post office\\" | \\"mail-in\\"';

const body = wrapper(builder => (
  builder
    .orFilter('wildcard', 'text', 'election*')
    .orFilter('match', 'text', 'absentee')
    .orFilter('match', 'text', 'rigged')
    .orFilter('match', 'text', 'electoral')
    .orFilter('match', 'text', 'ballot')
    .orFilter('match', 'text', 'postal')
    .orFilter('match_phrase', 'text', 'post office')
    .orFilter('match_phrase', 'text', 'mail-in')
));

module.exports = { body, name, search };
