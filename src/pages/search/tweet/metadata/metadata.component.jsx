import React, { Component } from 'react';
import { bool, func, number, oneOfType, string } from 'prop-types';
import Icon from '@/icon';
import TextSwitch from '@/text-switch';
import { utcTimestampToEST } from 'utils/date';
import { numberWithKs } from 'utils/format';
import styles from './metadata.module.scss';

export default class Metadata extends Component {
  static propTypes = {
    date: number.isRequired,
    favorites: oneOfType([number, string]).isRequired,
    index: number.isRequired,
    isDeleted: bool.isRequired,
    onTwitterClick: func.isRequired,
    showTwitterView: bool.isRequired,
    retweets: oneOfType([number, string]).isRequired,
  };

  render() {
    const { date, index, isDeleted, favorites, onTwitterClick, retweets, showTwitterView } =
      this.props;
    const dateShort = utcTimestampToEST(date, { timeTrim: true });
    const dateLong = utcTimestampToEST(date);
    return (
      <div className={styles.metadata}>
        <div className={styles.date}>
          <span className={styles.index}>{index}.</span>
          <TextSwitch mobile={dateShort} web={dateLong} />
        </div>
        <div className={styles.icons}>
          <span>
            <Icon name="RETWEET" /> {numberWithKs(retweets)}
          </span>
          <span>
            <Icon name="HEART" /> {numberWithKs(favorites)}
          </span>
          <span onClick={onTwitterClick}>
            <Icon name="TWITTER" />{' '}
            {isDeleted ? (
              <span className={styles.deleted}>Deleted</span>
            ) : showTwitterView ? (
              'Hide'
            ) : (
              'Show'
            )}
          </span>
        </div>
      </div>
    );
  }
}
