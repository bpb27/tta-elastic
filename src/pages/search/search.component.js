import React from 'react';
import MetaTags from 'react-meta-tags';
import { func, shape, string } from 'prop-types';
import { parseQuery } from 'utils/query';
import { validDatestring } from 'utils/date';
import { numberWithCommas } from 'utils/format';
import { queryParams } from 'utils/navigation';
import { zonedTimeToUtc } from 'date-fns-tz';
import Checkbox from 'components/checkbox';
import Tips from 'components/pages/tips';
import Tweet from './tweet';
import {
  DataSearch,
  DateRange,
  ReactiveList,
  SelectedFilters,
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
    showDateRange: !!queryParams().dates,
    showDeviceDropdown: !!queryParams().device,
    showRetweetButtons: !!queryParams().retweet,
    showTips: false,
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
      <React.Fragment>
        <MetaTags>
          <title>TTA - Search</title>
          <meta name="description" content="Instantly search through all 50k of Trump's tweets" />
          <meta property="og:title" content="Search on Trump Twitter Archive" />
        </MetaTags>
        <div className={styles.page}>
          { showTips && <Tips closeModal={() => this.setState({ showTips: false })} /> }
          <DataSearch
            autosuggest={false}
            className={styles.searchbox}
            componentId="searchbox"
            dataField="text"
            debounce={200}
            placeholder="Search for anything"
            queryFormat="and"
            react={{
              and: ['dates', 'device', 'results']
            }}
            searchOperators={true}
            URLParams={true}
          />
          <SelectedFilters/>
          <div className={styles.options}>
            <SingleDropdownList
              componentId="device"
              dataField="device.keyword"
              placeholder="Filter by device"
              react={{
                and: ['dates', 'results', 'retweet', 'searchbox']
              }}
              selectAllLabel="All devices"
              style={{
                display: showDeviceDropdown ? 'initial' : 'none',
              }}
              URLParams={true}
            />
            <DateRange
              componentId="dates"
              dataField="date"
              dayPickerInputProps={{
                parseDate: dateString => validDatestring(dateString) && zonedTimeToUtc(dateString, 'America/New_York'),
              }}
              placeholder={{
                end: 'YYYY-MM-DD',
                start: 'YYYY-MM-DD',
              }}
              style={{
                display: showDateRange ? 'initial' : 'none',
              }}
              URLParams={true}
            />
            <ToggleButton
              componentId="retweet"
              dataField="isRetweet"
              data={[
                { label: 'Hide Retweets', value: 'false' },
                { label: 'Only Retweets', value: 'true' },
              ]}
              multiSelect={false}
              style={{
                display: showRetweetButtons ? 'initial' : 'none',
              }}
              URLParams={true}
            />
          </div>
          <div className={styles.toggles}>
            <Checkbox
              label="Tips"
              name="show-search-tips"
              value={showTips}
              onClick={showTips => this.setState({ showTips })}
            />
            <Checkbox
              label="Dates"
              name="filter-by-date"
              value={showDateRange}
              onClick={showDateRange => this.setState({ showDateRange })}
            />
            <Checkbox
              label="Device"
              name="filter-by-device"
              value={showDeviceDropdown}
              onClick={showDeviceDropdown => this.setState({ showDeviceDropdown })}
            />
            <Checkbox
              label="Retweets"
              name="filter-by-retweet"
              value={showRetweetButtons}
              onClick={showRetweetButtons => this.setState({ showRetweetButtons })}
            />
          </div>
          <ReactiveList
            className={styles.list}
            componentId="results"
            dataField="text"
            infiniteScroll={true}
            react={{
              and: ['dates', 'device', 'retweet', 'searchbox']
            }}
            render={this.tweets.bind(this)}
            renderNoResults={() => 'No tweets found'}
            renderResultStats={({ numberOfResults }) => (
              <p><span>{numberWithCommas(numberOfResults)}</span> tweets found</p>
            )}
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
      </React.Fragment>
    );
  }
}
