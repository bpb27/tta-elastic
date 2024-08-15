import { wrapper } from './utils.js';

const name = 'minimumWage';

const search = '\\"minimum wage\\"';

const body = wrapper(builder => builder.orFilter('match_phrase', 'text', 'minimum wage'));

export default { body, name, search };
