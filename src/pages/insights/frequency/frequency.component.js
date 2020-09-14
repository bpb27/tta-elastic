import React from 'react';
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
      <div className={styles.frequency}>
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
    );
  }
}
