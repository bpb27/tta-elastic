import React from 'react';
import { string } from 'prop-types';
import ExternalLink from 'components/external-link';
import './news-link.style.scss';

export default class NewsLink extends React.Component {
  static propTypes = {
    href: string.isRequired,
    linkText: string.isRequired,
    preText: string,
  }

  render () {
    return (
      <div className="newsLink">
        { this.props.preText }
        <ExternalLink href={this.props.href} title="View news source">
          "{ this.props.linkText }"
        </ExternalLink>
      </div>

    );
  }
}
