import React from 'react';
import { node, string } from 'prop-types';
import './external-link.style.scss';

export default class ExternalLink extends React.Component {
  static propTypes = {
    children: node.isRequired,
    className: string,
    href: string.isRequired,
  }

  static defaultProps = {
    className: '',
  }

  render () {
    return (
      <a className={this.props.className} href={this.props.href} target="_blank" rel="noopener noreferrer">
        { this.props.children }
      </a>
    );
  }
}
