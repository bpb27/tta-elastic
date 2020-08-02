import React from 'react';
import styles from './collections.style.scss';
import PostEconomy from './posts/economy';

export default class Collections extends React.Component {
  render () {
    return (
      <div className={styles.collections}>
        <PostEconomy/>
      </div>
    );
  }
}
