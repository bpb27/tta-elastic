import { wrapper } from './utils.js';

const name = 'trade';

const search = 'tariff* | trade | WTO';

const body = wrapper(builder =>
  builder
    .orFilter('wildcard', 'text', 'tariff*')
    .orFilter('match', 'text', 'trade')
    .orFilter('match', 'text', 'wto')
);

export default { body, name, search };
