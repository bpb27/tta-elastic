import React, { Component } from 'react';
import { arrayOf, bool, number, oneOfType, shape, string } from 'prop-types';
import Highlighter from 'react-highlight-words';
import Metadata from './metadata';
import TweetLink from '@/tweet-link';
import { replaceHTMLEntities } from 'utils/format';
import styles from './tweet.module.scss';
import { parseTruthSocialBullshit } from '../../../utils/format';

export default class Tweet extends Component {
  static propTypes = {
    data: shape({
      date: number.isRequired,
      favorites: oneOfType([number, string]).isRequired,
      id: string.isRequired,
      isDeleted: bool.isRequired,
      isRetweet: bool.isRequired,
      retweets: oneOfType([number, string]).isRequired,
      text: string.isRequired,
    }),
    index: number.isRequired,
    searchWords: arrayOf(string).isRequired,
  };

  static defaultProps = {
    search: '',
  };

  state = {
    showTwitterView: false,
  };

  get content() {
    return replaceHTMLEntities(parseTruthSocialBullshit(this.props.data.text)) || 'No text';
  }

  render() {
    const { showTwitterView } = this.state;
    const { data, index, searchWords } = this.props;
    const { date, favorites, id, isDeleted, isRetweet, retweets, text } = data;
    const className = `${styles.tweet} ttaTweet`;
    const tweetData = JSON.stringify({ date, favorites, id, isRetweet, retweets, text });

    return (
      <div className={className} key={id} data-order={index} data-tweet={tweetData}>
        <Metadata
          date={date}
          favorites={favorites}
          index={index}
          isDeleted={isDeleted}
          onTwitterClick={() => this.setState({ showTwitterView: !showTwitterView })}
          showTwitterView={showTwitterView}
          retweets={retweets}
        />
        <div className={`${styles.text} ${showTwitterView ? styles.embedded : styles.plain}`}>
          {showTwitterView ? (
            <TweetLink tweetData={data} type="embed" />
          ) : (
            <Highlighter
              autoEscape={true}
              searchWords={searchWords}
              textToHighlight={this.content}
            />
          )}
        </div>
      </div>
    );
  }
}
