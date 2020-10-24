require('dotenv').config();

// GENERATE NEW FILES, move links to single locale

const { Client } = require('elasticsearch');
const { Pool } = require('pg');
const uploadToES = require('./upload-to-es');
const ids = require('./ids.json');
const { DATABASE_URL, SEARCHBOX_URL } = process.env;

const dbString = value => {
  const ssl = '?ssl=true&sslmode=require';
  return value.includes(ssl) ? value : `${value}${ssl}`;
};

// update postgres in bulk
// still have the ids that need to update
// only need a script to update those ids in ES

const esClient = new Client({ host: SEARCHBOX_URL });
const pool = new Pool({ connectionString: dbString(DATABASE_URL) });
const slice = (start, end) => ids.slice(start, end).map(item => `'${item.id}'`).join(',');

const run = async () => {
  const pgClient = await pool.connect();
  const { rows } = await pgClient.query(`SELECT id, text FROM tweets WHERE id in (${slice(7000,8000)})`);
  uploadToES(esClient, rows);
  pgClient.release();
  pool.end().then(() => console.log('pool has ended'));
};

run();

// uploadToES(esClient, [{ id: '1094718856197799936', text: 'Well, it happened again. Amy Klobuchar announced that she is running for President, talking proudly of fighting global warming while standing in a virtual blizzard of snow, ice and freezing temperatures. Bad timing. By the end of her speech she looked like a Snowman(woman)!' }]);
