require('dotenv').config();

const { Client } = require('elasticsearch');
const client = new Client({ host: process.env.SEARCHBOX_URL });

const abortion = require('./abortion');
const approval = require('./approval');
const climateChange = require('./climate-change');
const collusion = require('./collusion');
const covid = require('./covid');
const crime = require('./crime');
const debt = require('./debt');
const democrats = require('./democrats');
const education = require('./education');
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
const stocks = require('./stocks');
const taxes = require('./taxes');
const totalAsPresident = require('./total-as-president');
const trade = require('./trade');

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
  stocks,
  taxes,
  totalAsPresident,
  trade,
];

const getTopics = async () => {
  const query = body => client.search({ body, index: 'tweets' });
  const queries = searches.map(search => query(search.body));
  const results = await Promise.all(queries);

  return searches.map(({ name, search, terms }, i) => ({
    name,
    search,
    terms,
    total: results[i].hits.total
  }));
};

module.exports = getTopics;
