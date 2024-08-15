import { wrapper } from './utils.js';

const name = 'education';

const search =
  'school* | college* | education* | students | teachers | tuition | \\"student debt\\" | \\"student loan debt\\" -poll -electoral';

const body = wrapper(builder =>
  builder
    .notFilter('match', 'text', 'electoral')
    .notFilter('match', 'text', 'poll')
    .orFilter('wildcard', 'text', 'school*')
    .orFilter('wildcard', 'text', 'college*')
    .orFilter('wildcard', 'text', 'education*')
    .orFilter('match', 'text', 'students')
    .orFilter('match', 'text', 'teachers')
    .orFilter('match', 'text', 'tuition')
    .orFilter('match_phrase', 'text', 'student debt')
    .orFilter('match_phrase', 'text', 'student loan debt')
);

export default { body, name, search };
