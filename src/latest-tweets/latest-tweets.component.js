import React from 'react';
import { ReactiveList } from '@appbaseio/reactivesearch';
import { Link } from 'react-router-dom';
import Button from 'components/button';
import LatestTweet from './latest-tweet';
import List from 'components/lists/list';
import Pagination from './pagination';
import styles from './latest-tweets.style.scss';

export default class LatestTweets extends React.Component {
  state = {
    embedded: false,
  }

  get buttonChangeTweetStyle () {
    const { embedded } = this.state;
    return (
      <Button onClick={() => this.setState({ embedded: !embedded})}>
        { embedded ? 'Text View' : 'Twitter View' }
      </Button>
    );
  }

  get buttonSearchPage () {
    return (
      <Link className={styles.buttonLink} to="/search">
        <Button onClick={() => true}>
          Search all tweets
        </Button>
      </Link>
    );
  }

  render () {
    return (
      <List
        button={this.buttonChangeTweetStyle}
        buttonTwo={this.buttonSearchPage}
        className={styles.latestTweets}
        header="Latest tweets"
      >
        <ReactiveList
          componentId="results"
          dataField="text"
          infiniteScroll={false}
          pagination={true}
          renderPagination={props => <Pagination {...props}/>}
          renderItem={props => <LatestTweet data={props} key={props.id} embedded={this.state.embedded}/>}
          showResultStats={false}
          size={10}
          sortOptions={[{ dataField: 'date', label: 'Latest', sortBy: 'desc'}]}
        />
      </List>
    );
  }
}
