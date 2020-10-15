import React, { Component } from 'react';
import { arrayOf, bool, number, shape, string } from 'prop-types';
import Highlighter from 'react-highlight-words';
import Icon from 'components/icon';
import TextSwitch from 'components/text-switch';
import TweetLink from 'components/tweet-link';
import { utcTimestampToEST } from 'utils/date';
import { numberWithKs, replaceHTMLEntities } from 'utils/format';
import styles from './tweet.style.scss';

export default class Tweet extends Component {
  static propTypes = {
    data: shape({
      date: number.isRequired,
      favorites: number.isRequired,
      id: string.isRequired,
      isRetweet: bool.isRequired,
      retweets: number.isRequired,
      text: string.isRequired,
    }),
    index: number.isRequired,
    mobileView: bool,
    searchWords: arrayOf(string).isRequired,
  }

  static defaultProps = {
    mobileView: false,
    search: '',
  }

  state = {
    showTwitterView: false,
  }

  render () {
    const { showTwitterView } = this.state;
    const { data, index, mobileView, searchWords } = this.props;
    const { date, favorites, id, retweets, text } = data;
    const className = `${styles.tweet} ${mobileView ? styles.mobileView : ''}`;

    return (
      <div className={className} key={id}>
        <div className={styles.index}>
          { index }.
        </div>
        <div className={styles.metadata}>
          <span className={styles.mobileIndex}>{ index }.</span>
          <span className={styles.date}>
            <TextSwitch
              mobile={utcTimestampToEST(date, { timeTrim: true })}
              web={utcTimestampToEST(date)}
            />
          </span>
          <span className={styles.stats}>
            <span>
              <Icon name="RETWEET"/>
              { numberWithKs(retweets) }
            </span>
            <span>
              <Icon name="HEART"/>
              { numberWithKs(favorites) }
            </span>
            <span className={styles.twitterIcon} onClick={() => this.setState({ showTwitterView: !showTwitterView })}>
              <Icon name="TWITTER"/>
              { showTwitterView ? 'Hide' : 'Show' }
            </span>
          </span>
        </div>
        { showTwitterView ? (
          <TweetLink tweetData={data} type="embed"/>
        ) : (
          <div className={styles.text}>
            <Highlighter
              autoEscape={true}
              searchWords={searchWords}
              textToHighlight={replaceHTMLEntities(text)}
            />
          </div>
        )}
      </div>
    );
  }
}
