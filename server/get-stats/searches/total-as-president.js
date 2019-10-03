const { bodybuilder, presidentialRange } = require('./utils');

const name = 'totalAsPresident';
const terms = [];

const body = bodybuilder()
  .filter('bool', presidentialRange)
  .build();

module.exports = { body, name, terms };
