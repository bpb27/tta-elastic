import React from 'react';
import { utcTimestampToEST } from 'utils/date';
import { ReactiveList } from '@appbaseio/reactivesearch';
import { Link } from 'react-router-dom';
import Button from 'components/button';
import List from 'components/lists/list';
import Pagination from './pagination';
import TextSwitch from 'components/text-switch';
import TweetLink from 'components/tweet-link';
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
        header={<TextSwitch web="Latest tweets" mobile="Latest" />}
      >
        <ReactiveList
          componentId="results"
          dataField="text"
          infiniteScroll={false}
          pagination={true}
          renderPagination={props => <Pagination {...props}/>}
          renderItem={props => (
            <p className={styles.latestTweet} key={props.id}>
              <TweetLink tweetData={props} type={this.state.embedded ? 'embed' : 'text'}>
                <span>{ utcTimestampToEST(props.date) }</span>
              </TweetLink>
              {' - '}
              { props.text }
            </p>
          )}
          showResultStats={false}
          size={10}
          sortOptions={[{ dataField: 'date', label: 'Latest', sortBy: 'desc'}]}
        />
      </List>
    );
  }
}
