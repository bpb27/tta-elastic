import { describe, beforeEach, expect, vi, test } from 'vitest';
import messages from '../messages';
import { uploadToElastic } from '../upload-tweets-es';

describe('upload tweets', () => {
  let client;
  let logger;

  beforeEach(() => {
    client = { bulk: vi.fn() };
    logger = { error: vi.fn(), success: vi.fn() };
  });

  test('creates the ES payload', () => {
    uploadToElastic(client, logger, tweets);
    expect(client.bulk).toHaveBeenCalledTimes(1);
    expect(client.bulk.mock.calls[0][0]).toEqual({
      body: [
        { index: { _index: 'trump_tweets', _type: 'document', _id: tweets[0].id } },
        { ...tweets[0], date: 1448083213000 },
        { index: { _index: 'trump_tweets', _type: 'document', _id: tweets[1].id } },
        { ...tweets[1], date: 1444261599000 },
      ],
    });
  });

  test('logs a success message', () => {
    uploadToElastic(client, logger, tweets);
    const callback = client.bulk.mock.calls[0][1];
    callback();
    expect(logger.success).toHaveBeenCalledTimes(1);
    expect(logger.success).toHaveBeenCalledWith(messages.uploads.esSuccess);
  });

  test('logs an error message', () => {
    uploadToElastic(client, logger, tweets);
    const error = { message: 'Oh no' };
    const callback = client.bulk.mock.calls[0][1];
    callback(error);
    expect(logger.error).toHaveBeenCalledTimes(1);
    expect(logger.error).toHaveBeenCalledWith(messages.uploads.esError, error);
  });

  test('logs an error message from the response', () => {
    uploadToElastic(client, logger, tweets);
    const callback = client.bulk.mock.calls[0][1];
    callback(null, { errors: true, items: ['an item'] });
    expect(logger.error).toHaveBeenCalledTimes(1);
    expect(logger.error).toHaveBeenCalledWith(messages.uploads.esError, 'an item');
  });
});

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
    text: 'After some very important meetings, including my meeting with President Xi of China, I will be leaving Japan for South Korea (with President Moon). While there, if Chairman Kim of North Korea sees this, I would meet him at the Border/DMZ just to shake his hand and say Hello(?)!',
  },
];
