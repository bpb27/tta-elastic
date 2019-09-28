import React from 'react';
import { utcTimestampToEST } from 'utils/date';
import { ReactiveList } from '@appbaseio/reactivesearch';
import './latest-tweets.style.scss';

export default class LatestTweets extends React.Component {
  tweet (data) {
    return (
      <p key={data.id}>
        <span>{ utcTimestampToEST(data.date) }</span>
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
