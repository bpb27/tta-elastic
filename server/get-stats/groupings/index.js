import { tableName } from '../../utils.js';

const tweetsGroupedBy = unit => `
  select
    date_trunc('${unit}', date::timestamp AT time zone 'EST') as date,
    count(1)
  from ${tableName}
  group by 1
`;

// const tweetsByHour = () => `
//   select
//   extract(hour from date::timestamp AT time zone 'EST') as date,
//   count(1)
//   from ${tableName}
//   group by 1
// `;

export const getGroupings = async pool => {
  // const byHour = await pool.query(tweetsByHour());
  const byDay = await pool.query(tweetsGroupedBy('day'));
  const byWeek = await pool.query(tweetsGroupedBy('week'));
  const byMonth = await pool.query(tweetsGroupedBy('month'));
  return {
    // byHour: byHour.rows,
    byDay: byDay.rows,
    byMonth: byMonth.rows,
    byWeek: byWeek.rows,
  };
};
