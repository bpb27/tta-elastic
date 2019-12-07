import React from 'react';
import { ReactiveList } from '@appbaseio/reactivesearch';
import Icon from 'components/icon';
import LatestTweet from './latest-tweet';
import './latest-tweets.style.scss';

export default class LatestTweets extends React.Component {
  state = {
    embedded: false,
  }

  pagination ({  currentPage, setPage, totalPages }) {
    return (
      <div className="pagination">
        <button disabled={currentPage - 1 < 0} onClick={() => setPage(currentPage - 1)}>Prev</button>
        <button disabled={currentPage + 1 > totalPages } onClick={() => setPage(currentPage + 1)}>Next</button>
      </div>
    );
  }

  tweets (results) {
    return results.data.map(data => <LatestTweet data={data} key={data.id} embedded={this.state.embedded}/>);
  }

  render () {
    return (
      <div className="latestTweets">
        <h1>
          Latest tweets
          <Icon
            name="TWITTER"
            onClick={() => this.setState({ embedded: !this.state.embedded })}
            size={30}
          />
        </h1>
        <ReactiveList
          componentId="results"
          dataField="text"
          infiniteScroll={false}
          pagination={true}
          renderPagination={this.pagination.bind(this)}
          render={this.tweets.bind(this)}
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
