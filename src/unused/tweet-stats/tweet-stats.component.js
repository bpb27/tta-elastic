import React from 'react';
import { string } from 'prop-types';
import styles from './tweet-stats.style.scss';

export default class TweetStats extends React.Component {
  static propTypes = {
    name: string,
  }

  render () {
    return (
      <div className={styles.tweetStats}>
        a component
      </div>
    );
  }
}
