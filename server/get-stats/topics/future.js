import { wrapper } from './utils.js';

const name = 'future';

const search =
  '\\"artificial intelligence\\" | \\"clean jobs\\" | \\"clean energy\\" | \\"universal basic income\\" | automation | ubi';

const body = wrapper(builder =>
  builder
    .orFilter('match_phrase', 'text', 'artificial intelligence')
    .orFilter('match_phrase', 'text', 'clean jobs')
    .orFilter('match_phrase', 'text', 'clean energy')
    .orFilter('match_phrase', 'text', 'universal basic income')
    .orFilter('match', 'text', 'automation')
    .orFilter('match', 'text', 'ubi')
);

export default { body, name, search };
