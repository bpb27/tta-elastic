import React, { Component } from 'react';
import { bool, number, shape, string } from 'prop-types';
import ExternalLink from 'components/external-link';
import Highlighter from 'react-highlight-words';
import Icon from 'components/icon';
import utils from './tweet.utils';
import { utcTimestampToEST } from 'utils/date';
import './tweet.style.scss';

export default class Tweet extends Component {
  static propTypes = {
    data: shape({
      date: number.isRequired,
      device: string.isRequired,
      favorites: number.isRequired,
      id: string.isRequired,
      isRetweet: bool.isRequired,
      retweets: number.isRequired,
      text: string.isRequired,
    }),
    index: number.isRequired,
    mobileView: bool,
    search: string,
  }

  static defaultProps = {
    mobileView: false,
    search: '',
  }

  render () {
    const { data, index, mobileView, search } = this.props;
    const { date, device, favorites, id, retweets, text } = data;
    const className = `tweet ${mobileView ? 'mobileView' : ''}`;

    return (
      <div className={className} key={id}>
        <div className="index">
          { index }.
        </div>
        <div className="metadata">
          <span className="mobile-index">{ index }.</span>
          <span className="date">{ utcTimestampToEST(date) }</span>
          <span className="device">{ device }</span>
          <span className="stats">
            <span>
              <Icon name="RETWEET"/>
              { utils.formatNumber(retweets) }
            </span>
            <span>
              <Icon name="HEART"/>
              { utils.formatNumber(favorites) }
            </span>
            <span>
              <ExternalLink href={`https://twitter.com/realdonaldtrump/status/${id}`}>
                <Icon name="TWITTER"/>
              </ExternalLink>
            </span>
          </span>
        </div>
        <div className="text">
          <Highlighter
            autoEscape={true}
            searchWords={utils.parseQuery(search)}
            textToHighlight={utils.parseText(text)}
          />
        </div>
      </div>
    );
  }
}
