import React from 'react';
import { func, shape, string } from 'prop-types';
import { parseQuery } from 'utils/query';
import { twoDaysFromNow, validDatestring } from 'utils/date';
import { zonedTimeToUtc } from 'date-fns-tz';
import Button from 'components/button';
import Tips from 'components/pages/tips';
import Tweet from 'components/tweet';
import Checkbox from 'components/checkbox';
import {
  DataSearch,
  DateRange,
  ReactiveList,
  SingleDropdownList,
  StateProvider,
  ToggleButton
} from '@appbaseio/reactivesearch';
import styles from './search.style.scss';

export default class Search extends React.Component {
  static propTypes = {
    history: shape({
      push: func.isRequired,
    }).isRequired,
    location: shape({
      pathname: string.isRequired,
    }).isRequired,
  }

  state = {
    showDateRange: false,
    showDeviceDropdown: false,
    showRetweetButtons: false,
    showTips: false,
  }

  clear () {
    this.setState({
      showDateRange: false,
      showDeviceDropdown: false,
      showRetweetButtons: false,
      showTips: false,
    }, () => {
      this.props.history.push('/search');
      location.reload(true); // can't quite figure out how to force DataSearch to refetch, so doing this non-ideal move
    });
  }

  tweets (results) {
    return (
      <StateProvider>
        { ({ searchState }) => {
          const searchWords = parseQuery(searchState.searchbox ? searchState.searchbox.value : '');
          return results.data.map((item, i) => (
            <Tweet
              data={item}
              index={i + 1}
              key={item.id}
              searchWords={searchWords}
            />
          ));
        }}
      </StateProvider>
    );
  }

  render () {
    const {
      showDeviceDropdown,
      showDateRange,
      showRetweetButtons,
      showTips,
    } = this.state;

    return (
      <div className={styles.search}>
        { showTips && <Tips closeModal={() => this.setState({ showTips: false })} /> }
        <DataSearch
          autosuggest={false}
          className={styles.searchbox}
          componentId="searchbox"
          dataField="text"
          placeholder="Search for anything"
          queryFormat="and"
          react={{
            and: ['dates', 'device', 'results']
          }}
          searchOperators={true}
          URLParams={true}
        />
        <div className={styles.options}>
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
                start: new Date('2009-05-01'),
                end: twoDaysFromNow(),
              }}
              dayPickerInputProps={{
                parseDate: dateString => validDatestring(dateString) && zonedTimeToUtc(dateString, 'America/New_York'),
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
          <div className={styles.toggles}>
            <Button onClick={() => this.clear()}>Clear</Button>
            <Checkbox
              label="Tips"
              name="show-search-tips"
              value={showTips}
              onClick={showTips => this.setState({ showTips })}
            />
            <Checkbox
              label="Device"
              name="filter-by-device"
              value={showDeviceDropdown}
              onClick={showDeviceDropdown => this.setState({ showDeviceDropdown })}
            />
            <Checkbox
              label="Date"
              name="filter-by-date"
              value={showDateRange}
              onClick={showDateRange => this.setState({ showDateRange })}
            />
            <Checkbox
              label="Retweet"
              name="filter-by-retweet"
              value={showRetweetButtons}
              onClick={showRetweetButtons => this.setState({ showRetweetButtons })}
            />
          </div>
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
