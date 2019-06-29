const { preparePayload, upload } = require('./index');

describe('upload tweets', () => {
  test('it prepares payload of tweets for elastic search index', () => {
    const result = preparePayload(tweets);
    expect(result).toEqual({
      body: [
        { index: { _index: 'trump', _type: 'document', _id: tweets[0].id } },
        tweets[0],
        { index: { _index: 'trump', _type: 'document', _id: tweets[1].id } },
        tweets[1],
      ],
    });
  });

  test('it handles an upload error', () => {
    const consoleLog = jest.spyOn(global.console, 'log');
    const client = {
      bulk: (data, callback) => callback('violates index', null),
    };

    upload(client, tweets);
    expect(consoleLog).toHaveBeenCalledWith('error uploading: ', 'violates index');
  });

  test('it handles an upload success', () => {
    const consoleLog = jest.spyOn(global.console, 'log');
    const client = {
      bulk: (data, callback) => callback(null, { took: 100 }),
    };

    upload(client, tweets);
    expect(consoleLog).toHaveBeenCalledWith('successfully uploaded in 100ms', { took: 100 });
  });
});

const tweets = [
  {
    date: 'Sat Jun 29 10:11:32 +0000 2019',
    device: 'Twitter for iPhone',
    favorites: 82271,
    id: 1144911267641135100,
    isRetweet: false,
    retweets: 18266,
    text: 'Thank you #G20OsakaSummit https://t.co/9FCqSuR5Bp'
  },
  {
    date: 'Fri Jun 28 22:51:41 +0000 2019',
    device: 'Twitter for iPhone',
    favorites: 139441,
    id: 1144740178948493300,
    isRetweet: false,
    retweets: 33183,
    text: 'After some very important meetings, including my meeting with President Xi of China, I will be leaving Japan for South Korea (with President Moon). While there, if Chairman Kim of North Korea sees this, I would meet him at the Border/DMZ just to shake his hand and say Hello(?)!'
  }
];
