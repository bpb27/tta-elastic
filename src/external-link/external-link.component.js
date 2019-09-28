import React from 'react';
import { node, string } from 'prop-types';

export default class ExternalLink extends React.Component {
  static propTypes = {
    children: node.isRequired,
    className: string,
    href: string.isRequired,
    title: string,
  }

  static defaultProps = {
    className: '',
    title: 'View on Twitter.com',
  }

  render () {
    return (
      <a
        className={this.props.className}
        href={this.props.href}
        rel="noopener noreferrer"
        target="_blank"
        title={this.props.title}
      >
        { this.props.children }
      </a>
    );
  }
}
