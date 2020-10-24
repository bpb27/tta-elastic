require('dotenv').config();

const { Client } = require('elasticsearch');
const client = new Client({ host: process.env.SEARCHBOX_URL });
const { indexName } = require('../../utils');

const abortion = require('./abortion');
const approval = require('./approval');
const climateChange = require('./climate-change');
const collusion = require('./collusion');
const covid = require('./covid');
const crime = require('./crime');
const debt = require('./debt');
const democrats = require('./democrats');
const education = require('./education');
const election = require('./election');
const entitlements = require('./entitlements');
const fakeNews = require('./fake-news');
const foxNews = require('./fox-news');
const future = require('./future');
const guns = require('./guns');
const healthcare = require('./healthcare');
const immigration = require('./immigration');
const jobs = require('./jobs');
const military = require('./military');
const minimumWage = require('./minimum-wage');
const negativity = require('./negativity');
const religion = require('./religion');
const republicans = require('./republicans');
const stocks = require('./stocks');
const taxes = require('./taxes');
const totalAsPresident = require('./total-as-president');
const trade = require('./trade');
const trump = require('./trump');

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

const getTopics = async () => {
  const query = body => client.search({ body, index: indexName });
  const queries = searches.map(search => query(search.body));
  const results = await Promise.all(queries);

  return searches.map(({ name, search }, i) => ({
    name,
    search,
    total: results[i].hits.total
  }));
};

module.exports = getTopics;
