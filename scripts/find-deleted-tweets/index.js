require('dotenv').config();

const csv = require('csvtojson');
const path = require('path');
const fs = require('fs');
const moment = require('moment');
const { Client } = require('elasticsearch');
const { Pool } = require('pg');
const uploadToES = require('./upload-to-es');
const uploadToPG = require('./upload-to-pg');

const { DATABASE_URL, SEARCHBOX_URL } = process.env;

const dbString = value => {
  const ssl = '?ssl=true&sslmode=require';
  return value.includes(ssl) ? value : `${value}${ssl}`;
};

const client = new Client({ host: SEARCHBOX_URL });
const pool = new Pool({ connectionString: dbString(DATABASE_URL) });

const run = async () => {
  const fullIds = await csv().fromFile(path.join(__dirname, './tweets_ids.csv'));
  const newestIds = await csv().fromFile(path.join(__dirname, './new_tweets_ids.csv'));

  const newestHash = newestIds.reduce((hash, item) => {
    hash[item.id] = true;
    return hash;
  }, {});

  const deletedList = fullIds.filter(item => !newestHash[item.id]);

  // selecting from old DB
  const selectQuery = `
    SELECT "id", "text", "isRetweet", "device", "favorites", "retweets", date::timestamp AT time zone 'UTC' as date
    FROM tweets
    WHERE id in (${deletedList.map(item => `'${item.id}'`).join(',')})
  `;

  pool.query(selectQuery, (error, results) => {
    const tweetsToUpload = results.rows.map(item => ({
      ...item,
      date: item.date.toISOString(),
      isDeleted: true,
    }));
    console.log(tweetsToUpload[0]);
    uploadToPG(pool, tweetsToUpload, newDataFromPG => {
      uploadToES(client, newDataFromPG);
    });
  });

  // fs.writeFile('./deleted.json', JSON.stringify(deletedList, null, 4), (err) => {
  //   if (err) throw err;
  //   console.log('Success', deletedList.length);
  // });
};

run();
