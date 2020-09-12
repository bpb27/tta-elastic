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
    return (
      <div className={styles.frequency}>
        {
          this.state.data && (
            <TweetFrequency {...this.state.data.groupings}/>
          )
        }

        {/* <TweetStats topics={this.state.data.topics}/> */}
      </div>
    );
  }
}
