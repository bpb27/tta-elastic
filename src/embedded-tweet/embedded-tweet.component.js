import React from 'react';
import { string } from 'prop-types';
import './embedded-tweet.style.scss';

export default class EmbeddedTweet extends React.Component {
  static propTypes = {
    id: string.isRequired,
    text: string,
  }

  static defaultProps = {
    text: 'Loading...',
  }

  get href () {
    return `https://twitter.com/realDonaldTrump/status/${this.props.id}`;
  }

  render () {
    return (
      <div className="embeddedTweet">
        <blockquote className="twitter-tweet">
          <p lang="en" dir="ltr">{ this.props.text }</p>&mdash; Donald J. Trump (@realDonaldTrump)
          <a href={this.href} title="View this tweet on Twitter's website"></a>
        </blockquote>
      </div>
    );
  }
}
