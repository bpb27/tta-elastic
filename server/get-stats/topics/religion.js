const { wrapper } = require('./utils');

const name = 'religion';

const search = 'relig* | christi* | god | bible | jesus';

const body = wrapper(builder => (
  builder
    .orFilter('wildcard', 'text', 'relig*')
    .orFilter('wildcard', 'text', 'christi*')
    .orFilter('match', 'text', 'god')
    .orFilter('match', 'text', 'bible')
    .orFilter('match', 'text', 'jesus')
));

module.exports = { body, name, search };
