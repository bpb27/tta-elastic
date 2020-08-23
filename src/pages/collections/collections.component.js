import React from 'react';
import styles from './collections.style.scss';
import PostEconomy from './posts/economy';
import TweetFrequency from 'unused/tweet-frequency';

export default class Collections extends React.Component {
  render () {
    return (
      <div className={styles.collections}>
        <TweetFrequency/>
        <PostEconomy/>
      </div>
    );
  }
}
