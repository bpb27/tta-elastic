const { wrapper } = require('./utils');

const name = 'republicans';

const search = 'republican* | conservative* | mcconnell | mccarthy | romney | bush | mccain | ryan';

const body = wrapper(builder => (
  builder
    .orFilter('wildcard', 'text', 'republican*')
    .orFilter('wildcard', 'text', 'conservative*')
    .orFilter('match', 'text', 'mcconnell')
    .orFilter('match', 'text', 'mccarthy')
    .orFilter('match', 'text', 'romney')
    .orFilter('match', 'text', 'bush')
    .orFilter('match', 'text', 'mccain')
    .orFilter('match', 'text', 'ryan')
));

module.exports = { body, name, search };
