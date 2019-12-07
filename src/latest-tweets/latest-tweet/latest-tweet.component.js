import React from 'react';
import { bool, number, shape, string } from 'prop-types';
import { TwitterTweetEmbed } from 'react-twitter-embed';
import ExternalLink from 'components/external-link';
import { utcTimestampToEST } from 'utils/date';
import './latest-tweet.style.scss';

export default class LatestTweet extends React.Component {
  static propTypes = {
    data: shape({
      date: number.isRequired,
      id: string.isRequired,
      text: string.isRequired,
    }),
    embedded: bool,
  }

  render () {
    const { data, embedded } = this.props;
    const { date, id, text } = data;

    if (embedded) {
      return <TwitterTweetEmbed key={id} tweetId={id} />;
    }

    return (
      <div className="latestTweet" key={id}>
        <p>
          <ExternalLink id={id}>{ utcTimestampToEST(date) }</ExternalLink>
          {' - '}
          { text }
        </p>
      </div>
    );
  }
}
