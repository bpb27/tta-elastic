import { wrapper } from './utils.js';

const name = 'military';

const search = 'vets | veterans | military';

const body = wrapper(builder =>
  builder
    .orFilter('match', 'text', 'vets')
    .orFilter('match', 'text', 'veterans')
    .orFilter('match', 'text', 'military')
);

export default { body, name, search };
