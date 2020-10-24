const TABLE_NAME = 'trump_tweets';

const upload = (pool, tweets, callback) => {
  if (TABLE_NAME === 'tweets') throw new Error('Do not use that table name bruh');
  const values = tweets
    .map(({ id, text, isRetweet, isDeleted, date, device, favorites, retweets }) => (`(
      '${id}',
      '${text.replace(/'/g, '\'\'')}',
      ${isRetweet},
      ${isDeleted},
      '${date}',
      '${device}',
      ${favorites},
      ${retweets}
    )`))
    .join(',');

  const query = `
    INSERT INTO public.${TABLE_NAME} ("id", "text", "isRetweet", "isDeleted", "date", "device", "favorites", "retweets")
    VALUES ${values}
    ON CONFLICT (id)
    DO UPDATE SET favorites = EXCLUDED.favorites, retweets = EXCLUDED.retweets
    RETURNING "id"
  `;

  pool.query(query, (err, result) => {
    if (err) {
      console.error('PG UPLOAD ERROR', err);
    } else {
      const ids = result.rows.map(row => `'${row.id}'`).join(',');
      const selectQuery = `
        SELECT "id", "text", "isRetweet", "isDeleted", "device", "favorites", "retweets", date::timestamp AT time zone 'UTC' as date
        FROM public.${TABLE_NAME}
        WHERE id in (${ids})
      `;

      pool.query(selectQuery, (selectErr, selectResult) => {
        if (selectErr) {
          console.log('PG SELECT ERROR', selectErr);
        } else {
          callback(selectResult.rows);
        }
      });
    }
  });
};

module.exports = upload;
