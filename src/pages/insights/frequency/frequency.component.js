import React from 'react';
import MetaTags from 'react-meta-tags';
import TweetFrequency from './tweet-frequency';
import TweetStats from './tweet-stats';
import { request } from 'utils/api';
import styles from './frequency.style.scss';

export default class Frequency extends React.Component {
  state = {
    data: null,
  }

  componentDidMount () {
    this.getStats();
  }

  async getStats () {
    const { data } = await request('/stats');
    this.setState({ data });
  }

  render () {
    const { data } = this.state;
    return (
      <React.Fragment>
        <MetaTags>
          <title>TTA - How Many Tweets</title>
          <meta name="description" content="How many times has Trump tweeted, and what does he tweet about?" />
          <meta property="og:title" content="How Many Tweets on Trump Twitter Archive" />
        </MetaTags>
        <div className={styles.page}>
          <TweetFrequency
            day={data?.groupings.byDay}
            month={data?.groupings.byMonth}
            week={data?.groupings.byWeek}
          />
          <TweetStats
            byMonth={data?.groupings.byMonth}
            topics={data?.topics}
          />
        </div>
      </React.Fragment>
    );
  }
}
