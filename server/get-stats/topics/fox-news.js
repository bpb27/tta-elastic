import { wrapper } from './utils.js';

const name = 'foxNews';

const search =
  'fox* | TuckerCarlson | SeanHannity | IngrahamAngle | JudgeJeanine | LouDobbs | SteveDoocy | kilmeade | GeraldoRivera | WattersWorld | jessebwatters';

const body = wrapper(builder =>
  builder
    .orFilter('wildcard', 'text', 'fox*')
    .orFilter('match', 'text', 'TuckerCarlson')
    .orFilter('match', 'text', 'SeanHannity')
    .orFilter('match', 'text', 'IngrahamAngle')
    .orFilter('match', 'text', 'JudgeJeanine')
    .orFilter('match', 'text', 'LouDobbs')
    .orFilter('match', 'text', 'SteveDoocy')
    .orFilter('match', 'text', 'kilmeade')
    .orFilter('match', 'text', 'GeraldoRivera')
    .orFilter('match', 'text', 'WattersWorld')
    .orFilter('match', 'text', 'jessebwatters')
);

export default { body, name, search };
