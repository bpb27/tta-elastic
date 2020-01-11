const messages = require('./messages');

const upload = (pool, logger, tweets) => {
  const values = tweets
    .map(({ id, text, isRetweet, date, device, favorites, retweets }) => (`(
      '${id}',
      '${text.replace(/'/g, '\'\'')}',
      ${isRetweet},
      to_timestamp(${date} / 1000),
      '${device}',
      ${favorites},
      ${retweets}
    )`))
    .join(',');

  const query = `
    INSERT INTO public.tweets ("id", "text", "isRetweet", "date", "device", "favorites", "retweets")
    VALUES ${values}
    ON CONFLICT (id)
    DO UPDATE SET favorites = EXCLUDED.favorites, retweets = EXCLUDED.retweets
  `;

  pool.query(query, (err) => {
    if (err) {
      logger.error(messages.uploads.pgError, err);
    } else {
      logger.success(messages.uploads.pgSuccess);
    }
  });
};

module.exports = upload;
