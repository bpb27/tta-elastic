import { wrapper } from './utils.js';

const name = 'jobs';

const search = 'job* | worker* | wage* | employment | unemployment | labor';

const body = wrapper(builder =>
  builder
    .orFilter('wildcard', 'text', 'job*')
    .orFilter('wildcard', 'text', 'worker*')
    .orFilter('wildcard', 'text', 'wage*')
    .orFilter('match', 'text', 'employment')
    .orFilter('match', 'text', 'unemployment')
    .orFilter('match', 'text', 'labor')
);

export default { body, name, search };
