import React from 'react';
import { node, string } from 'prop-types';
import { tweetLink } from 'utils/links';

// for an external link to a trump tweet, just pass an tweetId prop

export default class ExternalLink extends React.Component {
  static propTypes = {
    children: node.isRequired,
    className: string,
    href: string,
    tweetId: string,
    title: string,
  }

  static defaultProps = {
    className: '',
    title: 'View on Twitter.com',
  }

  get href () {
    return this.props.tweetId ? tweetLink(this.props.tweetId) : this.props.href;
  }

  render () {
    return (
      <a
        className={this.props.className}
        href={this.href}
        rel="noopener noreferrer"
        target="_blank"
        title={this.props.title}
      >
        { this.props.children }
      </a>
    );
  }
}
