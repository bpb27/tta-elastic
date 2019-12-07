import React from 'react';
import { node, string } from 'prop-types';

// for an external link to a trump tweet, just pass an id prop

export default class ExternalLink extends React.Component {
  static propTypes = {
    children: node.isRequired,
    className: string,
    href: string,
    id: string,
    title: string,
  }

  static defaultProps = {
    className: '',
    title: 'View on Twitter.com',
  }

  get href () {
    if (this.props.id) {
      return `https://twitter.com/realdonaldtrump/status/${this.props.id}`;
    } else {
      return this.props.href;
    }
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
