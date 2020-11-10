const fetch = require('node-fetch');
const moment = require('moment');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const csvWriter = createCsvWriter({
  alwaysQuote: true,
  path: 'out2.csv',
  fieldDelimiter: ',',
  header: [
    { id: 'date', title: 'date' },
    { id: 'device', title: 'device' },
    { id: 'favorites', title: 'favorites' },
    { id: 'id', title: 'id' },
    { id: 'isRetweet', title: 'isRetweet' },
    { id: 'retweets', title: 'retweets' },
    { id: 'text', title: 'text' },
  ],
});

moment.suppressDeprecationWarnings = true;

const urls = [
  'http://d5nxcu7vtzvay.cloudfront.net/data/realdonaldtrump/2009.json',
  'http://d5nxcu7vtzvay.cloudfront.net/data/realdonaldtrump/2010.json',
  'http://d5nxcu7vtzvay.cloudfront.net/data/realdonaldtrump/2011.json',
  'http://d5nxcu7vtzvay.cloudfront.net/data/realdonaldtrump/2012.json',
  'http://d5nxcu7vtzvay.cloudfront.net/data/realdonaldtrump/2013.json',
  'http://d5nxcu7vtzvay.cloudfront.net/data/realdonaldtrump/2014.json',
  'http://d5nxcu7vtzvay.cloudfront.net/data/realdonaldtrump/2015.json',
  'http://d5nxcu7vtzvay.cloudfront.net/data/realdonaldtrump/2016.json',
  'http://d5nxcu7vtzvay.cloudfront.net/data/realdonaldtrump/2017.json',
  'http://d5nxcu7vtzvay.cloudfront.net/data/realdonaldtrump/2018.json',
  'http://d5nxcu7vtzvay.cloudfront.net/data/realdonaldtrump/2019.json',
  'http://trumptwitterarchive.com/data/realdonaldtrump/2020.json',
];

const pull = async () => {
  const responses = await Promise.all(urls.map(url => fetch(url)));
  const years = await Promise.all(responses.map(response => response.json()));
  const data = years
    .reduce((bigList, smallList) => [...bigList, ...smallList], [])
    .map(tweet => ({
      date: moment.utc(tweet.created_at).format('YYYY-MM-DD HH:mm:ss'),
      device: tweet.source,
      favorites: tweet.favorite_count,
      id: tweet.id_str,
      isRetweet: tweet.is_retweet,
      retweets: tweet.retweet_count,
      text: tweet.text,
    }));

    csvWriter
      .writeRecords(data)
      .then(()=> console.log('The CSV file was written successfully')); // eslint-disable-line no-console
};

pull();
