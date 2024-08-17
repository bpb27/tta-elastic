import dotev from 'dotenv';
import tweets from './tweets.json' with { type: 'json' };
import truths from './ts-data.json' with { type: 'json' };
import pgPkg from 'pg';
import esPkg from 'elasticsearch';
import { uploadToDatabase } from '../../server/upload-tweets-pg.js';
import { uploadToElastic } from '../../server/upload-tweets-es.js';
import { parseTruthSocialBullshit } from '../../src/utils/format.js';

dotev.config();
const { DATABASE_URL, SEARCHBOX_URL } = process.env;

const es = new esPkg.Client({ host: SEARCHBOX_URL });
const pg = new pgPkg.Pool({ connectionString: `${DATABASE_URL}?ssl=true&sslmode=require` });
const log = { error: console.error, success: console.log };

const mapTweets = () => {
  return tweets.map(t => ({
    id: t.data.tweetResult.result.legacy.id_str,
    text: t.data.tweetResult.result.legacy.full_text,
    isRetweet: t.data.tweetResult.result.legacy.retweeted,
    isDeleted: false,
    isTS: false,
    date: t.data.tweetResult.result.legacy.created_at,
    device: t.data.tweetResult.result.source.split('>')[1].split('<')[0],
    favorites: t.data.tweetResult.result.legacy.favorite_count,
    retweets: t.data.tweetResult.result.legacy.retweet_count,
  }));
};

const mapTruths = () => {
  return Object.values(truths).map(t => ({
    id: t.id,
    text: t.content,
    isRetweet: !!t.reblog,
    isDeleted: false,
    isTS: true,
    date: t.created_at, // TODO: proper format? '2024-08-13T17:48:56.386Z'
    device: 'Truth Social',
    favorites: t.favourites_count,
    retweets: t.reblogs_count,
  }));
};

const uploadNewTweets = async () => {
  const tweets = mapTweets();
  const pgClient = await pg.connect();
  uploadToDatabase(pg, log, tweets, () => {
    uploadToElastic(es, log, tweets);
    pgClient.release();
    pg.end();
  });
};

const addIsTsFieldToEs = () => {
  es.indices.putMapping(
    {
      index: 'trump_tweets',
      type: 'document',
      body: {
        properties: {
          isTS: {
            type: 'boolean',
          },
        },
      },
    },
    console.log
  );
};

const backfillIsTsFieldInEs = () => {
  es.updateByQuery(
    {
      index: 'trump_tweets',
      body: {
        script: { source: 'ctx._source.isTS = false', lang: 'painless' },
        query: { match_all: {} },
      },
    },
    console.log
  );
};

const upload = items => {
  console.log(`${items.length} items, first id is ${items[0]?.id}`);
  return new Promise((resolve, reject) => {
    uploadToDatabase(pg, log, items, () => {
      uploadToElastic(es, log, items);
      resolve();
    });
  });
};

async function processChunksSequentially(array, chunkSize, promiseFn) {
  const chunk = (arr, size) => {
    return arr.reduce((chunks, item, index) => {
      const chunkIndex = Math.floor(index / size);
      if (!chunks[chunkIndex]) chunks[chunkIndex] = []; // start a new chunk
      chunks[chunkIndex].push(item);
      return chunks;
    }, []);
  };

  const chunks = chunk(array, chunkSize);
  for (let chunk of chunks) {
    await promiseFn(chunk);
  }
}

// processChunksSequentially(mapTruths(), 900, upload)
//   .then(() => console.log('All chunks processed!'))
//   .catch(console.error);

console.log(mapTruths().filter(t => !parseTruthSocialBullshit(t.text)).length);
