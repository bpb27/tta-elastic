import React from 'react';
import { ReactiveList } from '@appbaseio/reactivesearch';
import Icon from 'components/icon';
import LatestTweet from './latest-tweet';
import Pagination from './pagination';
import './latest-tweets.style.scss';

export default class LatestTweets extends React.Component {
  state = {
    embedded: false,
  }

  render () {
    const { embedded } = this.state;
    return (
      <div className="latestTweets">
        <h1>
          Latest tweets
          <Icon
            name="TWITTER"
            onClick={() => this.setState({ embedded: !embedded })}
            size={30}
          />
        </h1>
        <ReactiveList
          componentId="results"
          dataField="text"
          infiniteScroll={false}
          pagination={true}
          renderPagination={props => <Pagination {...props}/>}
          renderItem={props => <LatestTweet data={props} key={props.id} embedded={embedded}/>}
          showResultStats={false}
          size={10}
          sortOptions={[{ dataField: 'date', label: 'Latest', sortBy: 'desc'}]}
        />
      </div>
    );
  }
}
