import React from 'react';
import Button from 'components/button';
import Page from 'components/page';
import TweetLink from 'components/tweet-link';
import {
  dataAttacks,
  dataObama,
  dataRetribution,
  dataWomen,
} from './past.data';
import styles from './past.style.scss';

export default class Past extends React.Component {
  state = {
    show: 'retribution',
  }

  get list () {
    const { show } = this.state;

    if (show === 'retribution') return dataRetribution;
    else if (show === 'women') return dataWomen;
    else if (show === 'obama') return dataObama;
    else if (show === 'attacks') return dataAttacks;
    else return null;
  }

  render () {
    const { show } = this.state;
    return (
      <Page
        className={styles.page}
        tabTitle="Pre-Presidency Tweets"
        metaDescription="Some tweets before Trump became president"
        metaTitle="Pre-Presidency Tweets on Trump Twitter Archive"
      >
        <h1>Pre-Presidency Tweets</h1>
        <div className={styles.buttons}>
          <Button onClick={() => this.setState({ show: 'retribution' })} selected={show === 'retribution'}>Retribution</Button>
          <Button onClick={() => this.setState({ show: 'women' })} selected={show === 'women'}>Women</Button>
          <Button onClick={() => this.setState({ show: 'obama' })} selected={show === 'obama'}>Obama</Button>
          <Button onClick={() => this.setState({ show: 'attacks' })} selected={show === 'attacks'}>Some Attacks</Button>
        </div>
        <div className={styles.list}>
          {
            this.list.map(data => <TweetLink key={data.id} type="embed" tweetData={data}/>)
          }
          <Button onClick={() => window.scrollTo(0, 0)}>Back to top</Button>
        </div>
      </Page>
    );
  }
}
