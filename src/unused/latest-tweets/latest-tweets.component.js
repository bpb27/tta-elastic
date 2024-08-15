import React from 'react';
import { utcTimestampToEST } from 'utils/date';
import { ReactiveList } from '@appbaseio/reactivesearch';
import { Link } from 'react-router-dom';
import Button from '@/button';
import List from '@/lists/list';
import Pagination from './pagination';
import Skeleton from '@/skeleton';
import TextSwitch from '@/text-switch';
import TweetLink from '@/tweet-link';
import styles from './latest-tweets.style.scss';

export default class LatestTweets extends React.Component {
  state = {
    embedded: false,
  };

  get buttonChangeTweetStyle() {
    const { embedded } = this.state;
    return (
      <Button onClick={() => this.setState({ embedded: !embedded })}>
        {embedded ? 'Text View' : 'Twitter View'}
      </Button>
    );
  }

  get buttonSearchPage() {
    return (
      <Link className={styles.buttonLink} to="/search">
        <Button onClick={() => true}>Search all tweets</Button>
      </Link>
    );
  }

  render() {
    const { embedded } = this.state;
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
          loader={<Skeleton />}
          pagination={true}
          renderPagination={props => <Pagination {...props} />}
          renderItem={props => (
            <p className={styles.latestTweet} key={props.id}>
              <TweetLink tweetData={props} type={embedded ? 'embed' : 'text'}>
                <span>{utcTimestampToEST(props.date)}</span>
              </TweetLink>
              {!embedded && ` - ${props.text}`}
            </p>
          )}
          showResultStats={false}
          size={10}
          sortOptions={[{ dataField: 'date', label: 'Latest', sortBy: 'desc' }]}
        />
      </List>
    );
  }
}
