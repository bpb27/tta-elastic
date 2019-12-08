import React from 'react';
import { bool, node, string } from 'prop-types';
import { TwitterTweetEmbed } from 'react-twitter-embed';
import ExternalLink from 'components/external-link';
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

    if (showEmbedded) {
      return <TwitterTweetEmbed tweetId={id} />;
    }

    return (
      <ExternalLink className="tweetLink" id={id}>
        { children || `"${text}"` }
      </ExternalLink>
    );
  }
}
