import { getTopics } from './topics/index.js';
import { getGroupings } from './groupings/index.js';

export const getStats = async pool => {
  const topics = await getTopics();
  const groupings = await getGroupings(pool);
  return { groupings, topics };
};
