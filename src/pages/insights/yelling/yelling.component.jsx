import React from 'react';
import EmbeddedTweetColumn from '@/embedded-tweet-column';
import Page from '@/page';
import TweetLink from '@/tweet-link';
import data from './yelling.data';
import styles from './yelling.style.scss';

export default class Yelling extends React.Component {
  render() {
    return (
      <Page
        className={styles.page}
        tabTitle="Yelling Tweets"
        metaDescription="Tweets with caps-lock on"
        metaTitle="Yelling Tweets on Trump Twitter Archive"
      >
        <EmbeddedTweetColumn header="Yelling">
          {data.map(item => (
            <TweetLink key={item.id} placeholderAlignment="center" type="embed" tweetData={item} />
          ))}
        </EmbeddedTweetColumn>
      </Page>
    );
  }
}
