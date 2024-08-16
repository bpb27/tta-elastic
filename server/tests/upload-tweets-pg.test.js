import { describe, beforeEach, it, expect, vi } from 'vitest';
import messages from '../messages';
import { uploadToDatabase } from '../upload-tweets-pg';

describe('upload new tweets to database', () => {
  let pool;
  let logger;
  let finalCallback;

  beforeEach(() => {
    pool = { query: vi.fn() };
    logger = { error: vi.fn(), success: vi.fn() };
    finalCallback = vi.fn();
  });

  it('creates the upsert query', () => {
    uploadToDatabase(pool, logger, tweets, finalCallback);
    expect(pool.query.mock.calls[0][0]).toEqual(expectedUpsertQuery);
  });

  it('logs an upsert error message', () => {
    uploadToDatabase(pool, logger, tweets);
    const upsertCallback = pool.query.mock.calls[0][1];
    upsertCallback({ message: 'Oh no' });
    expect(logger.error).toHaveBeenCalledTimes(1);
    expect(logger.error).toHaveBeenCalledWith(messages.uploads.pgError, { message: 'Oh no' });
  });

  it('creates the select query', () => {
    uploadToDatabase(pool, logger, tweets, finalCallback);
    const upsertCallback = pool.query.mock.calls[0][1];
    const upsertResult = {
      rows: [{ id: '1144911267641135100' }, { id: '1144740178948493300' }],
    };
    upsertCallback(null, upsertResult);
    expect(pool.query.mock.calls[1][0]).toContain(
      'SELECT "id", "text", "isRetweet", "isDeleted", "device", "favorites", "retweets", date::timestamp AT time zone \'UTC\' as date'
    );
    expect(pool.query.mock.calls[1][0]).toContain('FROM trump_tweets');
    expect(pool.query.mock.calls[1][0]).toContain(
      "WHERE id in ('1144911267641135100','1144740178948493300')"
    );
  });

  it('logs a select error message', () => {
    uploadToDatabase(pool, logger, tweets, finalCallback);
    const upsertCallback = pool.query.mock.calls[0][1];
    const upsertResult = {
      rows: [{ id: '1144911267641135100' }, { id: '1144740178948493300' }],
    };
    upsertCallback(null, upsertResult);
    const selectCallback = pool.query.mock.calls[1][1];
    selectCallback({ message: 'Oh no' });
    expect(logger.error).toHaveBeenCalledTimes(1);
    expect(logger.error).toHaveBeenCalledWith(messages.uploads.pgError, { message: 'Oh no' });
  });

  it('logs a select success message 1', () => {
    uploadToDatabase(pool, logger, tweets, finalCallback);
    const upsertCallback = pool.query.mock.calls[0][1];
    const upsertResult = {
      rows: [{ id: '1144911267641135100' }, { id: '1144740178948493300' }],
    };
    upsertCallback(null, upsertResult);
    const selectCallback = pool.query.mock.calls[1][1];
    selectCallback(null, tweets);
    expect(logger.success).toHaveBeenCalledTimes(1);
    expect(logger.success).toHaveBeenCalledWith(messages.uploads.pgSuccess);
  });

  it('logs a select success message 2', () => {
    uploadToDatabase(pool, logger, tweets, finalCallback);
    const upsertCallback = pool.query.mock.calls[0][1];
    const upsertResult = {
      rows: [{ id: '1144911267641135100' }, { id: '1144740178948493300' }],
    };
    upsertCallback(null, upsertResult);
    const selectCallback = pool.query.mock.calls[1][1];
    selectCallback(null, { rows: tweets });
    expect(logger.success).toHaveBeenCalledTimes(1);
    expect(logger.success).toHaveBeenCalledWith(messages.uploads.pgSuccess);
  });

  it('executes the final callback with the select results', () => {
    uploadToDatabase(pool, logger, tweets, finalCallback);
    const upsertCallback = pool.query.mock.calls[0][1];
    const upsertResult = {
      rows: [{ id: '1144911267641135100' }, { id: '1144740178948493300' }],
    };
    upsertCallback(null, upsertResult);
    const selectCallback = pool.query.mock.calls[1][1];
    selectCallback(null, { rows: tweets });
    expect(finalCallback).toHaveBeenCalledTimes(1);
    expect(finalCallback).toHaveBeenCalledWith(tweets);
  });
});

const expectedUpsertQuery = `
    INSERT INTO public.trump_tweets ("id", "text", "isRetweet", "isDeleted", "date", "device", "favorites", "retweets")
    VALUES (
      '1144911267641135100',
      'Thank you #G20OsakaSummit https://t.co/9FCqSuR5Bp',
      false,
      false,
      'Sat Nov 21 05:20:13 +0000 2015',
      'Twitter for iPhone',
      82271,
      18266
    ),(
      '1144740178948493300',
      'After some very important meetings',
      false,
      false,
      'Wed Oct 07 23:46:39 +0000 2015',
      'Twitter for iPhone',
      139441,
      33183
    )
    ON CONFLICT (id)
    DO UPDATE SET favorites = EXCLUDED.favorites, retweets = EXCLUDED.retweets
    RETURNING "id"
  `;

const tweets = [
  {
    date: 'Sat Nov 21 05:20:13 +0000 2015',
    device: 'Twitter for iPhone',
    favorites: 82271,
    id: '1144911267641135100',
    isDeleted: false,
    isRetweet: false,
    retweets: 18266,
    text: 'Thank you #G20OsakaSummit https://t.co/9FCqSuR5Bp',
  },
  {
    date: 'Wed Oct 07 23:46:39 +0000 2015',
    device: 'Twitter for iPhone',
    favorites: 139441,
    id: '1144740178948493300',
    isDeleted: false,
    isRetweet: false,
    retweets: 33183,
    text: 'After some very important meetings',
  },
];
