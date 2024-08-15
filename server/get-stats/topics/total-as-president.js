import bodybuilder from 'bodybuilder';
import { presidentialRange } from './utils.js';

const name = 'totalAsPresident';
const terms = [];

const body = bodybuilder()
  .filter('bool', presidentialRange)
  // .filter('bool', hideRetweets)
  .build();

export default { body, name, terms };
