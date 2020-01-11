const messages = require('../messages');
const upload = require('../upload-tweets-pg');

describe('upload new tweets to database', () => {
  let pool;
  let logger;

  beforeEach(() => {
    pool = { query: jest.fn() };
    logger = { error: jest.fn(), success: jest.fn() };
  });

  it('creates the upsert query', () => {
    upload(pool, logger, tweets);
    expect(pool.query).toHaveBeenCalledTimes(1);
    expect(pool.query.mock.calls[0][0]).toEqual(expectedQuery);
  });

  it('logs a success message', () => {
    upload(pool, logger, tweets);
    const callback = pool.query.mock.calls[0][1];
    callback();
    expect(logger.success).toHaveBeenCalledTimes(1);
    expect(logger.success).toHaveBeenCalledWith(messages.uploads.pgSuccess);
  });

  it('logs an error message', () => {
    upload(pool, logger, tweets);
    const error = { message: 'Oh no' };
    const callback = pool.query.mock.calls[0][1];
    callback(error);
    expect(logger.error).toHaveBeenCalledTimes(1);
    expect(logger.error).toHaveBeenCalledWith(messages.uploads.pgError, error);
  });
});

const expectedQuery = `
    INSERT INTO public.tweets ("id", "text", "isRetweet", "date", "device", "favorites", "retweets")
    VALUES (
      '1144911267641135100',
      'Thank you #G20OsakaSummit https://t.co/9FCqSuR5Bp',
      false,
      to_timestamp(1561803092000 / 1000),
      'Twitter for iPhone',
      82271,
      18266
    ),(
      '1144740178948493300',
      'After some very important meetings',
      false,
      to_timestamp(1561762301000 / 1000),
      'Twitter for iPhone',
      139441,
      33183
    )
    ON CONFLICT (id)
    DO UPDATE SET favorites = EXCLUDED.favorites, retweets = EXCLUDED.retweets
  `;

const tweets = [
  {
    date: 1561803092000,
    device: 'Twitter for iPhone',
    favorites: 82271,
    id: '1144911267641135100',
    isRetweet: false,
    retweets: 18266,
    text: 'Thank you #G20OsakaSummit https://t.co/9FCqSuR5Bp'
  },
  {
    date: 1561762301000,
    device: 'Twitter for iPhone',
    favorites: 139441,
    id: '1144740178948493300',
    isRetweet: false,
    retweets: 33183,
    text: 'After some very important meetings'
  }
];
