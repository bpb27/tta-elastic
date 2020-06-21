import React from 'react';
import { arrayOf, node, object, oneOf, string } from 'prop-types';
import { TwitterTweetEmbed } from 'react-twitter-embed';
import ExternalLink from 'components/external-link';
import Placeholder from './placeholder';
import styles from './tweet-link.style.scss';

// https://developer.twitter.com/en/docs/twitter-for-websites/embedded-tweets/guides/embedded-tweet-parameter-reference

export default class TweetLink extends React.Component {
  static propTypes = {
    children: node,
    className: string,
    fullText: string,
    placeholderHighlights: arrayOf(string),
    tweetData: object,
    type: oneOf(['embed', 'placeholder', 'text']).isRequired,
  }

  static defaultProps = {
    className: '',
    type: 'text',
  }

  render () {
    const {
      className,
      children,
      fullText,
      placeholderHighlights,
      tweetData,
      type,
    } = this.props;

    if (type === 'embed') {
      return (
        <div className={className}>
          <TwitterTweetEmbed
            options={{
              // cards: 'hidden',
              dnt: true,
            }}
            placeholder={<Placeholder tweetData={tweetData}/>}
            tweetId={tweetData.id}
          />
        </div>
      );
    } else if (type === 'placeholder') {
      return (
        <Placeholder
          className={className}
          fullText={fullText}
          placeholderHighlights={placeholderHighlights}
          tweetData={tweetData}
        />
      );
    } else if (type === 'text') {
      return (
        <ExternalLink
          className={`${styles.textLink} ${className}`}
          tweetId={tweetData.id}
        >
          { children }
        </ExternalLink>
      );
    }
  }
}
