require('dotenv').config();

const { Client } = require('elasticsearch');
const client = new Client({ host: process.env.SEARCHBOX_URL });
const searches = require('./searches');

const getStats = async () => {
  // function to actually query ES
  const query = body => client.search({ body, index: 'tweets' });

  // map through searches and execute ES queries
  const queries = searches.map(search => query(search.body));
  const results = await Promise.all(queries);

  // map the response
  return searches.map(({ name, terms }, i) => ({
    name,
    terms,
    total: results[i].hits.total
  }));
};

module.exports = getStats;
