const bodybuilder = require('bodybuilder');

// greater than date 01/20/17
const presidentialRange = builder => builder.filter('range', 'date', { gte: 1484899200000 });
const hideRetweets = builder => builder.filter('match', 'isRetweet', false);

const wrapper = custom => (
  bodybuilder()
    .andFilter('bool', presidentialRange)
    .andFilter('bool', hideRetweets)
    .orFilter('bool', custom)
    .build()
);

module.exports = {
  bodybuilder,
  hideRetweets,
  presidentialRange,
  wrapper,
};
