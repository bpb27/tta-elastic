import React from 'react';
import { func, shape } from 'prop-types';
import { withRouter } from 'react-router-dom';
import { queryParams } from 'utils/navigation';
import Button from 'components/button';
import EmbeddedTweetColumn from 'components/embedded-tweet-column';
import Page from 'components/page';
import TweetLink from 'components/tweet-link';
import {
  dataAssorted,
  dataAttacks,
  dataObama,
  dataRetribution,
  dataWomen,
} from './past.data';
import styles from './past.style.scss';

export class Past extends React.Component {
  static propTypes = {
    history: shape({
      push: func,
    }).isRequired,
  }

  changePage = section => this.props.history.push(`/insights/past?section=${section}`);

  get list () {
    switch (this.sectionFromUrl) {
      case 'assorted': return dataAssorted;
      case 'attacks': return dataAttacks;
      case 'obama': return dataObama;
      case 'retribution': return dataRetribution;
      case 'women': return dataWomen;
      default: return [];
    }
  }

  get sectionFromUrl () {
    return queryParams(window.location.href).section || 'retribution';
  }

  render () {
    const section = this.sectionFromUrl;
    return (
      <Page
        className={styles.page}
        tabTitle="Pre-Presidency Tweets"
        metaDescription="Some tweets before Trump became president"
        metaTitle="Pre-Presidency Tweets on Trump Twitter Archive"
      >
        <h1>Pre-Presidency Tweets</h1>
        <div className={styles.buttons}>
          <Button onClick={() => this.changePage('retribution')} selected={section === 'retribution'}>Retribution</Button>
          <Button onClick={() => this.changePage('women')} selected={section === 'women'}>Women</Button>
          <Button onClick={() => this.changePage('obama')} selected={section === 'obama'}>Obama</Button>
          <Button onClick={() => this.changePage('attacks')} selected={section === 'attacks'}>Some Attacks</Button>
          <Button onClick={() => this.changePage('assorted')} selected={section === 'assorted'}>Assorted</Button>
        </div>
        <EmbeddedTweetColumn>
          {
            this.list.map(data => <TweetLink key={data.id} type="embed" tweetData={data}/>)
          }
        </EmbeddedTweetColumn>
      </Page>
    );
  }
}

export default withRouter(Past);
