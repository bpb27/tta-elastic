import React from 'react';
import MetaTags from 'react-meta-tags';
import { func, shape, string } from 'prop-types';
import { parseQuery } from 'utils/query';
import { validDatestring } from 'utils/date';
import { numberWithCommas } from 'utils/format';
import { queryParams } from 'utils/navigation';
import { zonedTimeToUtc } from 'date-fns-tz';
import Button from 'components/button';
import Tips from 'components/pages/tips';
import TextSwitch from 'components/text-switch';
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
            debounce={400}
            placeholder="Instantly search all tweets..."
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
            <Button
              onClick={() => this.setState({ showTips: !showTips })}
              selected={showTips}
            >
              Show tips
            </Button>
            <Button
              onClick={() => this.setState({ showRetweetButtons: !showRetweetButtons })}
              selected={showRetweetButtons}
            >
              Retweet filters
            </Button>
            <Button
              onClick={() => this.setState({ showDateRange: !showDateRange })}
              selected={showDateRange}
            >
              Date filters
            </Button>
            <Button
              onClick={() => this.setState({ showDeviceDropdown: !showDeviceDropdown })}
              selected={showDeviceDropdown}
            >
              Device filters
            </Button>
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
              <p>
                <span className={styles.results}>{numberWithCommas(numberOfResults)}</span> <TextSwitch mobile="tweets" web="tweets found"/>
              </p>
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
