import { wrapper } from './utils.js';

const name = 'debt';

const search = 'debt | deficit';

const body = wrapper(builder =>
  builder.orFilter('match', 'text', 'debt').orFilter('match', 'text', 'deficit')
);

export default { body, name, search };
