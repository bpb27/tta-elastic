import React from 'react';
import { ReactiveList } from '@appbaseio/reactivesearch';
import Button from 'components/button';
import LatestTweet from './latest-tweet';
import List from 'components/lists/list';
import Pagination from './pagination';
import './latest-tweets.style.scss';

export default class LatestTweets extends React.Component {
  state = {
    embedded: false,
  }

  render () {
    const { embedded } = this.state;
    return (
      <List className="latestTweets" header="Latest tweets">
        <Button onClick={() => this.setState({ embedded: !embedded})}>
          Render as { embedded ? 'text' : 'tweet' }
        </Button>
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
      </List>
    );
  }
}
