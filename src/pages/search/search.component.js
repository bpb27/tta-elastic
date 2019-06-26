import React from 'react';
import { DataSearch, DateRange, ReactiveList, SelectedFilters, SingleDropdownList, StateProvider, ToggleButton } from '@appbaseio/reactivesearch';
import Tweet from '../../tweet';
import './search.style.scss';

export default class Search extends React.Component {
  state = {
    queryFormat: 'and',
  }

  get exactSearchButton () {
    const { queryFormat } = this.state;
    if (queryFormat === 'and') {
      return <button onClick={() => this.setState({ queryFormat: 'or' })}>Exact Search (on)</button>;
    } else {
      return <button onClick={() => this.setState({ queryFormat: 'and' })}>Exact Search (off)</button>;
    }
  }

  tweets (results) {
    return (
      <StateProvider>
        { ({ searchState }) => (
          results.data.map((item, i) => (
            <Tweet
              data={item}
              index={i + 1}
              key={item.id}
              search={searchState.searchbox.value}
            />
          ))
        )}
      </StateProvider>
    );
  }

  render () {
    return (
      <div id="search-page">
        <DataSearch
          autosuggest={false}
          componentId="searchbox"
          dataField="text"
          placeholder="Search for anything"
          react={{
            and: ['dates', 'device', 'results']
          }}
          URLParams={true}
        />
        <SingleDropdownList
          componentId="device"
          dataField="device.keyword"
          placeholder="Filter by device"
          react={{
            and: ['dates', 'results', 'retweet', 'searchbox']
          }}
          selectAllLabel="All devices"
          URLParams={true}
        />
        <DateRange
          componentId="dates"
          dataField="date"
          defaultValue={{
            start: new Date('2009-05-01'),
            end: new Date().setTime(new Date().getTime() + (24 * 60 * 60 * 1000))
          }}
          URLParams={true}
        />
        <SelectedFilters
          showClearAll={true}
          clearAllLabel="Clear filters"
        />
        <ToggleButton
          componentId="retweet"
          dataField="isRetweet"
          data={[
            { label: 'Hide Retweets', value: false },
            { label: 'Only Retweets', value: true },
          ]}
          URLParams={true}
        />
        { this.exactSearchButton }
        <ReactiveList
          componentId="results"
          dataField="text"
          infiniteScroll={true}
          queryFormat={this.state.queryFormat}
          react={{
            and: ['dates', 'device', 'retweet', 'searchbox']
          }}
          render={this.tweets.bind(this)}
          size={25}
          sortOptions={[
            { dataField: 'date', label: 'Latest', sortBy: 'desc'},
            { dataField: 'date', label: 'Oldest', sortBy: 'asc'},
            { dataField: 'favorites', label: 'Most Likes', sortBy: 'desc'},
            { dataField: 'retweets', label: 'Most Retweets', sortBy: 'desc'},
          ]}
          URLParams={true}
        />
      </div>
    );
  }
}
