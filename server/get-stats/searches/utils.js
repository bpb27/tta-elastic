const bodybuilder = require('bodybuilder');

// greater than date 01/20/17
const presidentialRange = builder => builder.filter('range', 'date', { gte: 1484899200000 });

module.exports = {
  bodybuilder,
  presidentialRange,
};
