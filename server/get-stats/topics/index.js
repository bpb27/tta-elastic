import dotenv from 'dotenv';
import es from 'elasticsearch';
import { indexName } from '../../utils.js';
import abortion from './abortion.js';
import approval from './approval.js';
import climateChange from './climate-change.js';
import collusion from './collusion.js';
import covid from './covid.js';
import crime from './crime.js';
import debt from './debt.js';
import democrats from './democrats.js';
import education from './education.js';
import election from './election.js';
import entitlements from './entitlements.js';
import fakeNews from './fake-news.js';
import foxNews from './fox-news.js';
import future from './future.js';
import guns from './guns.js';
import healthcare from './healthcare.js';
import immigration from './immigration.js';
import jobs from './jobs.js';
import military from './military.js';
import minimumWage from './minimum-wage.js';
import negativity from './negativity.js';
import religion from './religion.js';
import republicans from './republicans.js';
import stocks from './stocks.js';
import taxes from './taxes.js';
import totalAsPresident from './total-as-president.js';
import trade from './trade.js';
import trump from './trump.js';

dotenv.config();

const client = new es.Client({ host: process.env.SEARCHBOX_URL });

const searches = [
  abortion,
  approval,
  climateChange,
  collusion,
  covid,
  crime,
  debt,
  democrats,
  education,
  election,
  entitlements,
  fakeNews,
  foxNews,
  future,
  guns,
  jobs,
  healthcare,
  immigration,
  military,
  minimumWage,
  negativity,
  religion,
  republicans,
  stocks,
  taxes,
  totalAsPresident,
  trade,
  trump,
];

export const getTopics = async () => {
  const query = body => client.search({ body, index: indexName });
  const queries = searches.map(search => query(search.body));
  const results = await Promise.all(queries);

  return searches.map(({ name, search }, i) => ({
    name,
    search,
    total: results[i].hits.total,
  }));
};
