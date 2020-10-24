const messages = require('./messages');
const { tableName } = require('./utils');

const upload = (pool, logger, tweets, callback) => {
  const values = tweets
    .map(({ id, text, isDeleted, isRetweet, date, device, favorites, retweets }) => (`(
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
    INSERT INTO public.${tableName} ("id", "text", "isRetweet", "isDeleted", "date", "device", "favorites", "retweets")
    VALUES ${values}
    ON CONFLICT (id)
    DO UPDATE SET favorites = EXCLUDED.favorites, retweets = EXCLUDED.retweets
    RETURNING "id"
  `;

  pool.query(query, (errorUpsert, resultUpsert) => {

    if (errorUpsert) {
      logger.error(messages.uploads.pgError, errorUpsert);
    } else {
      // use the returned ids to fetch data again, then will sync to ES
      // TODO: this can probably be avoid via a proper RETURNING
      const selectQuery = `
        SELECT "id", "text", "isRetweet", "isDeleted", "device", "favorites", "retweets", date::timestamp AT time zone 'UTC' as date
        FROM ${tableName}
        WHERE id in (${resultUpsert.rows.map(row => `'${row.id}'`).join(',')})
      `;

      pool.query(selectQuery, (errorSelect, resultSelect) => {
        if (errorSelect) {
          logger.error(messages.uploads.pgError, errorSelect);
        } else {
          logger.success(messages.uploads.pgSuccess);
          callback(resultSelect.rows);
        }
      });
    }
  });
};

module.exports = upload;
