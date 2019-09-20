import React from 'react';
import { node, string } from 'prop-types';
import './tweet-link.style.scss';

export default class TweetLink extends React.Component {
  static propTypes = {
    children: node,
    id: string.isRequired,
    text: string,
  }

  render () {
    const { children, id, text } = this.props;
    return (
      <a className="tweetLink" href={`https://twitter.com/realDonaldTrump/status/${id}`} rel="noopener noreferrer" target="_blank">
        { children || `"${text}"` }
      </a>
    );
  }
}
