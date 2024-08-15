import { wrapper } from './utils.js';

const name = 'abortion';

const search = 'abortion | roe';

const body = wrapper(builder =>
  builder.orFilter('match', 'text', 'abortion').orFilter('match', 'text', 'roe')
);

export default { body, name, search };
