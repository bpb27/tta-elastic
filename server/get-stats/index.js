const getTopics = require('./topics');
const getGroupings = require('./groupings');

const getStats = async pool => {
  const topics = await getTopics();
  const groupings = await getGroupings(pool);
  return { groupings, topics };
};

module.exports = getStats;
