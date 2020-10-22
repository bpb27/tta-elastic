import React from 'react';
import { request } from 'utils/api';
import Button from 'components/button';
import Tweet from 'components/pages/search/tweet';
import styles from './old-search.style.scss';

export default class OldSearch extends React.Component {
  state = {
    error: null,
    loading: false,
    offset: 1,
    search: '',
    tweets: [],
  }

  handleLoadMore = async () => {
    const offset = this.state.offset + 1;

    this.setState({
      error: null,
      offset,
      loading: true,
    });

    const { data, error } = await request(`/search-tweets/${this.state.search}/${offset}`);

    if (data) {
      this.setState({
        loading: false,
        tweets: [...this.state.tweets, ...data.results],
      });
    } else if (error) {
      this.setState({
        error: 'Something went wrong',
        loading: false,
      });
    }
  }

  handleSubmit = async () => {
    this.setState({
      offset: 1,
      loading: true,
      total: 0,
      tweets: [],
    });

    const { data, error } = await request(`/search-tweets/${this.state.search}/1`);
    if (data) {
      this.setState({
        loading: false,
        total: data.total,
        tweets: data.results,
      });
    } else if (error) {
      this.setState({
        error: 'Something went wrong',
        loading: false,
      });
    }
  }

  render () {
    const { error, loading, search, total, tweets } = this.state;
    return (
      <div className={styles.oldSearch}>
        <div className={styles.top}>
          <p>This page is only meant to find things you can't find via the main search page.</p>
          <p>It will perform a very basic match to see if anything in the tweet contain the search phrase.</p>
          <p>For example, "los" will return tweets with close, floss, lose, los angeles, etc.</p>
          <p>Your search cannot contain spaces.</p>
          <p>Once you figure out the full words you're looking for, please return to the main page.</p>
          <div className={styles.searchbox}>
            <input
              onChange={ev => this.setState({ search: ev.target.value })}
              value={search}
            />
            <Button disabled={loading} onClick={this.handleSubmit}>Search</Button>
            { !!error && <p>{ error }</p> }
            { !!total && <p>{ total } tweets found</p> }
          </div>
        </div>
        <div className={styles.list}>
          { tweets.map((tweet, i) => (
            <Tweet
              data={tweet}
              index={i + 1}
              key={tweet.id}
              searchWords={[search]}
            />
          ))}
          { !!tweets.length && (
            <Button disabled={loading} onClick={this.handleLoadMore}>Load more</Button>
          )}
        </div>
      </div>
    );
  }
}
