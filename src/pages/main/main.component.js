import React from 'react';
import LatestTweets from 'components/latest-tweets';
import ListBadHires from 'components/lists/bad-hires';
import ListDog from 'components/lists/dog';
import ListEconomy from 'components/lists/economy';
import ListTreason from 'components/lists/treason';
import styles from './main.style.scss';

// https://twitter.com/realdonaldtrump/status/726461507601612800

export default class Main extends React.Component {
  render () {
    return (
      <div className={styles.main}>
        <LatestTweets/>
        <ListBadHires/>
        <ListEconomy/>
        <ListTreason/>
        <ListDog/>
      </div>
    );
  }
}
