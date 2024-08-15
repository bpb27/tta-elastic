import { wrapper } from './utils.js';

const name = 'collusion';

const search =
  'hoax* | russia* | collusion* | mueller* | impeach* | witch | dossier | steele | Schiff | Putin | quid';

const body = wrapper(builder =>
  builder
    .orFilter('wildcard', 'text', 'hoax*')
    .orFilter('wildcard', 'text', 'russia*')
    .orFilter('wildcard', 'text', 'collusion*')
    .orFilter('wildcard', 'text', 'mueller*')
    .orFilter('wildcard', 'text', 'impeach*')
    .orFilter('match', 'text', 'witch')
    .orFilter('match', 'text', 'dossier')
    .orFilter('match', 'text', 'steele')
    .orFilter('match', 'text', 'schiff')
    .orFilter('match', 'text', 'putin')
    .orFilter('match', 'text', 'quid')
);

export default { body, name, search };
