import React from 'react';
import { bool, node, string } from 'prop-types';
import EmbeddedTweet from 'components/embedded-tweet';
import './tweet-link.style.scss';

export default class TweetLink extends React.Component {
  static propTypes = {
    children: node,
    id: string.isRequired,
    showEmbedded: bool,
    text: string,
  }

  render () {
    const { children, id, showEmbedded, text } = this.props;

    if (showEmbedded) return <EmbeddedTweet id={id} />;
    return (
      <a className="tweetLink" href={`https://twitter.com/realDonaldTrump/status/${id}`} rel="noopener noreferrer" target="_blank">
        { children || `"${text}"` }
      </a>
    );
  }
}
