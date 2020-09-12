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
    placeholderHighlights: arrayOf(string),
    tweetData: object,
    type: oneOf(['embed', 'placeholder', 'text']).isRequired,
  }

  static defaultProps = {
    className: '',
    type: 'text',
  }

  state = {
    deleted: false,
  }

  render () {
    const { deleted } = this.state;
    const {
      className,
      children,
      placeholderHighlights,
      tweetData,
      type,
    } = this.props;

    if (type === 'placeholder' || deleted) {
      return (
        <Placeholder
          className={className}
          deleted={deleted}
          placeholderHighlights={placeholderHighlights}
          tweetData={tweetData}
        />
      );
    } else if (type === 'embed') {
      return (
        <div className={className}>
          <TwitterTweetEmbed
            options={{
              // cards: 'hidden',
              dnt: true,
            }}
            onLoad={element => {
              if (!element) this.setState({ deleted: true });
            }}
            placeholder={<Placeholder tweetData={tweetData}/>}
            tweetId={tweetData.id}
          />
        </div>
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
