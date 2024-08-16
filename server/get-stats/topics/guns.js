import { wrapper } from './utils.js';

const name = 'guns';

const search = '\\"Second Amendment\\" | \\"2nd Amendment\\" | gun* | firearm* | 2A | NRA';

const body = wrapper(builder =>
  builder
    .orFilter('match_phrase', 'text', 'Second Amendment')
    .orFilter('match_phrase', 'text', '2nd Amendment')
    .orFilter('wildcard', 'text', 'gun*')
    .orFilter('wildcard', 'text', 'firearm*')
    .orFilter('match', 'text', '2A')
    .orFilter('match', 'text', 'NRA')
);

export default { body, name, search };
