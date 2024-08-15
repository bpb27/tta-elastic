import { wrapper } from './utils.js';

const name = 'taxes';

const search = 'tax*';

const body = wrapper(builder => builder.orFilter('wildcard', 'text', 'tax*'));

export default { body, name, search };
