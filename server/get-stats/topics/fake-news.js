const { wrapper } = require('./utils');

const name = 'fakeNews';

const search = '\\"fake news\\" | media | cnn | msnbc | nyt | nytimes | \\"new york times\\" | \\"washington post\\" | washingtonpost | nbc | nbcnews | cbs | cbsnews | abc | abcnews';

const body = wrapper(builder => (
  builder
    .orFilter('match_phrase', 'text', 'fake news')
    .orFilter('match', 'text', 'media')
    .orFilter('match', 'text', 'cnn')
    .orFilter('match', 'text', 'msnbc')
    .orFilter('match', 'text', 'nyt')
    .orFilter('match', 'text', 'nytimes')
    .orFilter('match_phrase', 'text', 'new york times')
    .orFilter('match_phrase', 'text', 'washington post')
    .orFilter('match', 'text', 'washingtonpost')
    .orFilter('match', 'text', 'nbc')
    .orFilter('match', 'text', 'nbcnews')
    .orFilter('match', 'text', 'cbs')
    .orFilter('match', 'text', 'cbsnews')
    .orFilter('match', 'text', 'abc')
    .orFilter('match', 'text', 'abcnews')
));

module.exports = { body, name, search };
