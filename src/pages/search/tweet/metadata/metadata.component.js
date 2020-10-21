import React, { Component } from 'react';
import { bool, func, number } from 'prop-types';
import Icon from 'components/icon';
import TextSwitch from 'components/text-switch';
import { utcTimestampToEST } from 'utils/date';
import { numberWithKs } from 'utils/format';
import styles from './metadata.style.scss';

export default class Metadata extends Component {
  static propTypes = {
    date: number.isRequired,
    favorites: number.isRequired,
    index: number.isRequired,
    onTwitterClick: func.isRequired,
    showTwitterView: bool.isRequired,
    retweets: number.isRequired,
  }

  render () {
    const { date, index, favorites, onTwitterClick, retweets, showTwitterView } = this.props;
    const dateShort = utcTimestampToEST(date, { timeTrim: true });
    const dateLong = utcTimestampToEST(date);
    return (
      <div className={styles.metadata}>
        <div className={styles.date}>
          <span className={styles.index}>{ index }.</span>
          <TextSwitch mobile={dateShort} web={dateLong} />
        </div>
        <div className={styles.icons}>
          <span>
            <Icon name="RETWEET"/> { numberWithKs(retweets) }
          </span>
          <span>
            <Icon name="HEART"/> { numberWithKs(favorites) }
          </span>
          <span onClick={onTwitterClick}>
            <Icon name="TWITTER"/> { showTwitterView ? 'Hide' : 'Show' }
          </span>
        </div>
      </div>
    );
  }
}
