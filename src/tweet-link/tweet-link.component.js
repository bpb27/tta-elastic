import React from 'react';
import { bool, node, string } from 'prop-types';
import { TwitterTweetEmbed } from 'react-twitter-embed';
import './tweet-link.style.scss';

// TODO: fix overlap with <LatestTweet/>

export default class TweetLink extends React.Component {
  static propTypes = {
    children: node,
    id: string.isRequired,
    showEmbedded: bool,
    text: string,
  }

  render () {
    const { children, id, showEmbedded, text } = this.props;

    if (showEmbedded) {
      return <TwitterTweetEmbed tweetId={id} />;
    }

    return (
      <a className="tweetLink" href={`https://twitter.com/realDonaldTrump/status/${id}`} rel="noopener noreferrer" target="_blank">
        { children || `"${text}"` }
      </a>
    );
  }
}
