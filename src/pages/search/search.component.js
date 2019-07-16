import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import Tweet from '../../tweet';
import Checkbox from '../../checkbox';
import {
  DataSearch,
  DateRange,
  ReactiveList,
  SingleDropdownList,
  StateProvider,
  ToggleButton
} from '@appbaseio/reactivesearch';
import './search.style.scss';

export default class Search extends React.Component {
  state = {
    showDateRange: false,
    showDeviceDropdown: false,
    showRetweetButtons: false,
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
              search={searchState.searchbox ? searchState.searchbox.value : ''}
            />
          ))
        )}
      </StateProvider>
    );
  }

  render () {
    const {
      showDeviceDropdown,
      showDateRange,
      showRetweetButtons,
    } = this.state;

    return (
      <div id="search-page">
        <DataSearch
          autosuggest={false}
          className="searchbox"
          componentId="searchbox"
          dataField="text"
          placeholder="Search for anything"
          react={{
            and: ['dates', 'device', 'results']
          }}
          searchOperators={true}
          URLParams={true}
        />
        <div className="options">
          { showDeviceDropdown && (
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
          )}
          { showDateRange && (
            <DateRange
              componentId="dates"
              dataField="date"
              defaultValue={{
                start: moment('2009-05-01', 'YYYY-MM-DD').toDate(),
                end: moment().add(2, 'days').toDate(),
              }}
              URLParams={true}
            />
          )}
          { showRetweetButtons && (
            <ToggleButton
              componentId="retweet"
              dataField="isRetweet"
              data={[
                { label: 'Hide Retweets', value: false },
                { label: 'Only Retweets', value: true },
              ]}
              URLParams={true}
            />
          )}
          <Link to="/search/tips">Search Tips</Link>
          <Checkbox
            label="Device"
            value={showDeviceDropdown}
            onClick={showDeviceDropdown => this.setState({ showDeviceDropdown })}
          />
          <Checkbox
            label="Date Range"
            value={showDateRange}
            onClick={showDateRange => this.setState({ showDateRange })}
          />
          <Checkbox
            label="Retweet"
            value={showRetweetButtons}
            onClick={showRetweetButtons => this.setState({ showRetweetButtons })}
          />
        </div>
        <ReactiveList
          componentId="results"
          dataField="text"
          infiniteScroll={true}
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
