import { wrapper } from './utils.js';

const name = 'crime';

const search = 'police* | crime | criminal | \\"law and order\\"';

const body = wrapper(builder =>
  builder
    .orFilter('wildcard', 'text', 'police*')
    .orFilter('match', 'text', 'crime')
    .orFilter('match', 'text', 'criminal')
    .orFilter('match_phrase', 'text', 'law and order')
);

export default { body, name, search };
