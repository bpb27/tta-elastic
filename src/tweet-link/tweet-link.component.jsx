import React, { Fragment } from 'react';
import { arrayOf, node, object, oneOf, string } from 'prop-types';
import { TwitterTweetEmbed } from 'react-twitter-embed';
import VisibilitySensor from './viz-sensor/viz-sensor.component';
import ExternalLink from '@/external-link';
import Placeholder from './placeholder';
import styles from './tweet-link.module.scss';
import { EmbeddedTruth } from '../embedded-truth/embedded-truth.component';

// https://developer.twitter.com/en/docs/twitter-for-websites/embedded-tweets/guides/embedded-tweet-parameter-reference

export default class TweetLink extends React.Component {
  static propTypes = {
    children: node,
    className: string,
    placeholderAlignment: oneOf(['center', 'left']),
    placeholderHighlights: arrayOf(string),
    tweetData: object,
    type: oneOf(['embed', 'placeholder', 'text']).isRequired,
  };

  static defaultProps = {
    className: '',
    type: 'text',
  };

  state = {
    deleted: false,
    isVisible: false,
  };

  render() {
    const { deleted, isVisible } = this.state;
    const { className, children, placeholderAlignment, placeholderHighlights, tweetData, type } =
      this.props;

    const placeholder = (
      <Placeholder
        alignment={placeholderAlignment}
        className={className}
        deleted={deleted}
        placeholderHighlights={placeholderHighlights}
        tweetData={tweetData}
      />
    );

    if (type === 'placeholder' || deleted) {
      return <Fragment>{placeholder}</Fragment>;
    } else if (type === 'embed') {
      if (!isVisible) {
        return (
          <div className={className}>
            <VisibilitySensor
              intervalDelay={400}
              onChange={isVisible => this.setState({ isVisible })}
              partialVisibility={true}
            >
              {placeholder}
            </VisibilitySensor>
          </div>
        );
      } else if (tweetData.isTS) {
        return (
          <div>
            <iframe
              src={`https://truthsocial.com/@realDonaldTrump/${tweetData.id}/embed`}
              style={{ border: '1px solid gray' }}
              width="100%"
              height="400"
              allowFullScreen="allowfullscreen"
              onError={() => this.setState({ deleted: true })}
            ></iframe>
          </div>
        );
      } else {
        return (
          <TwitterTweetEmbed
            options={{ dnt: true }}
            onLoad={element => {
              if (!element) this.setState({ deleted: true });
            }}
            placeholder={<Placeholder alignment={placeholderAlignment} tweetData={tweetData} />}
            tweetId={tweetData.id}
          />
        );
      }
    } else if (type === 'text') {
      return (
        <ExternalLink className={`${styles.textLink} ${className}`} tweetId={tweetData.id}>
          {children}
        </ExternalLink>
      );
    }
  }
}
