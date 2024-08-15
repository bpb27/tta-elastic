import { wrapper } from './utils.js';

const name = 'trump';

const search = 'trump';

const body = wrapper(builder => builder.orFilter('match', 'text', 'trump'));

export default { body, name, search };
