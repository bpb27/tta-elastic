import React from 'react';
import { ReactiveList } from '@appbaseio/reactivesearch';
import Tweet from 'components/tweet';
import './latest-tweets.style.scss';

export default class LatestTweets extends React.Component {
  tweets (results) {
    return results.data.map((item, i) => (
      <Tweet
        data={item}
        index={i + 1}
        key={item.id}
        mobileView={true}
      />
    ));
  }

  render () {
    return (
      <div className="latestTweets">
        <ReactiveList
          componentId="results"
          dataField="text"
          infiniteScroll={false}
          pagination={true}
          render={this.tweets.bind(this)}
          showResultStats={false}
          size={5}
          sortOptions={[
            { dataField: 'date', label: 'Latest', sortBy: 'desc'},
          ]}
        />
      </div>
    );
  }
}
