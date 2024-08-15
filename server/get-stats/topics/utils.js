import bodybuilder from 'bodybuilder';

// greater than date 01/20/17
export const presidentialRange = builder => builder.filter('range', 'date', { gte: 1484899200000 });
export const hideRetweets = builder => builder.filter('match', 'isRetweet', false);

export const wrapper = custom =>
  bodybuilder()
    .andFilter('bool', presidentialRange)
    // .andFilter('bool', hideRetweets)
    .orFilter('bool', custom)
    .build();
