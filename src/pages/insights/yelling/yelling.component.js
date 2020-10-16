import React from 'react';
import Button from 'components/button';
import Page from 'components/page';
import TweetLink from 'components/tweet-link';
import data from './yelling.data';
import styles from './yelling.style.scss';

export default class Yelling extends React.Component {
  render () {
    return (
      <Page
        className={styles.page}
        tabTitle="Yelling Tweets"
        metaDescription="Tweets with caps-lock on"
        metaTitle="Yelling Tweets on Trump Twitter Archive"
      >
        <h1>Yelling</h1>
        <div className={styles.list}>
          {
            data.map(data => <TweetLink key={data.id} type="embed" tweetData={data}/>)
          }
          <Button onClick={() => window.scrollTo(0, 0)}>Back to top</Button>
        </div>
      </Page>
    );
  }
}
