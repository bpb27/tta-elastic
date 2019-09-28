const fetch = require('node-fetch');
const moment = require('moment');
const upload = require('./upload');

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
  'http://trumptwitterarchive.com/data/realdonaldtrump/2019.json',
];

/* eslint-disable no-console */
const pull = async () => {
  const responses = await Promise.all(urls.map(url => fetch(url)));
  const years = await Promise.all(responses.map(response => response.json()));
  const data = years
    .reduce((bigList, smallList) => [...bigList, ...smallList], [])
    .map(tweet => ({
      date: moment.utc(tweet.created_at).toDate().getTime(),
      device: tweet.source,
      favorites: tweet.favorite_count,
      id: tweet.id_str,
      isRetweet: tweet.is_retweet,
      retweets: tweet.retweet_count,
      text: tweet.text,
    }));

    try {
      console.log('starting upload');
      await upload(data.slice(0, 5000));
      console.log('done', 0, 5000);
      await upload(data.slice(5000, 10000));
      console.log('done', 5000, 10000);
      await upload(data.slice(10000, 15000));
      console.log('done', 10000, 15000);
      await upload(data.slice(15000, 20000));
      console.log('done', 15000, 20000);
      await upload(data.slice(20000, 25000));
      console.log('done', 20000, 25000);
      await upload(data.slice(25000, 30000));
      console.log('done', 25000, 30000);
      await upload(data.slice(30000, 35000));
      console.log('done', 30000, 35000);
      await upload(data.slice(35000, 40000));
      console.log('done', 35000, 40000);
      await upload(data.slice(40000, 45000));
      console.log('done', 40000, 42000);
    } catch (e) {
      console.log('catch block trigger', e);
    }
};

pull();
