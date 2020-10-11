import React from 'react';
import Page from 'components/page';
import TweetLink from 'components/tweet-link';
import data from './past.data';
import styles from './past.style.scss';

export default class Past extends React.Component {
  state = {
    1: data.slice(0, 10),
    2: data.slice(10, 20),
    3: data.slice(20, 30),
    4: data.slice(30, 40),
    5: data.slice(40, 50),
    6: data.slice(50, 60),
    7: data.slice(60, 70),
    8: data.slice(70, 80),
    9: data.slice(80, 90),
    10: data.slice(90, 100),
    11: data.slice(100, 110),
  }

  render () {
    return (
      <Page
        className={styles.page}
        tabTitle="Pre-Presidential Tweets"
        metaDescription="Some tweets before Trump became president"
        metaTitle="Pre-Presidential Tweets on Trump Twitter Archive"
      >
        <h1>Pre-Presidential Tweets</h1>
        <div className={styles.list}>
          {
            data.map(tweet => (
              <TweetLink key={tweet.id} type="embed" tweetData={tweet}/>
            ))
          }
        </div>
      </Page>
    );
  }
}
