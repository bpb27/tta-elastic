import { wrapper } from './utils.js';

const name = 'democrats';

const search =
  'democrat* | liberal* | obama* | clinton* | biden* | pelosi* | schumer* | leftist* | \\"radical left\\"';

const body = wrapper(builder =>
  builder
    .orFilter('wildcard', 'text', 'democrat*')
    .orFilter('wildcard', 'text', 'liberal*')
    .orFilter('wildcard', 'text', 'obama*')
    .orFilter('wildcard', 'text', 'clinton*')
    .orFilter('wildcard', 'text', 'biden*')
    .orFilter('wildcard', 'text', 'pelosi*')
    .orFilter('wildcard', 'text', 'schumer*')
    .orFilter('wildcard', 'text', 'leftist*')
    .orFilter('wildcard', 'text', 'kamala*')
    .orFilter('match_phrase', 'text', 'radical left')
);

export default { body, name, search };
