const { wrapper } = require('./utils');

const name = 'fakeNews';
const terms = [
  'fake news',
];

const body = wrapper(builder => (
  builder
    .orFilter('match', 'text', 'fake news')
));

module.exports = { body, name, terms };
