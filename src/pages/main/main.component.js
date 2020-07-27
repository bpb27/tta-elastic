import React from 'react';
import LatestTweets from 'components/latest-tweets';
import ListBadHires from 'components/lists/bad-hires';
import ListDog from 'components/lists/dog';
import styles from './main.style.scss';

export default class Main extends React.Component {
  render () {
    return (
      <div className={styles.main}>
        <LatestTweets/>
        <ListBadHires/>
        <ListDog/>
      </div>
    );
  }
}
