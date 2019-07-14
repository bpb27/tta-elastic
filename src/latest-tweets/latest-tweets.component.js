import React from 'react';
import { string } from 'prop-types';
import moment from 'moment';
import { ReactiveList } from '@appbaseio/reactivesearch';
import './latest-tweets.style.scss';

export default class LatestTweets extends React.Component {
  static propTypes = {
    name: string,
  }

  tweet (data) {
    return (
      <p key={data.id}>
        <span>{ moment(data.date, 'x').format('MMM Do YYYY, h:mm:ss a') }</span>
        <span>{ data.text }</span>
      </p>
    );
  }

  render () {
    return (
      <div className="latestTweets">
        <ReactiveList
          componentId="results"
          dataField="text"
          infiniteScroll={false}
          pagination={true}
          renderItem={this.tweet.bind(this)}
          showResultStats={false}
          size={10}
          sortOptions={[
            { dataField: 'date', label: 'Latest', sortBy: 'desc'},
          ]}
        />
      </div>
    );
  }
}
