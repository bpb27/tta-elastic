import React from 'react';
import { func, shape, string } from 'prop-types';
import { parseQuery } from 'utils/query';
import { validDatestring } from 'utils/date';
import { numberWithCommas } from 'utils/format';
import { queryParams } from 'utils/navigation';
import { zonedTimeToUtc } from 'date-fns-tz';
import Button from 'components/button';
import Export from './export';
import Page from 'components/page';
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
    showDeletedButtons: !!queryParams().deleted,
    showExportModal: false,
    showRetweetButtons: !!queryParams().retweet,
    showTips: false,
    total: 0,
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
      showDeletedButtons,
      showDeviceDropdown,
      showDateRange,
      showExportModal,
      showRetweetButtons,
      showTips,
      total,
    } = this.state;

    return (
      <Page
        className={styles.page}
        tabTitle="Search"
        metaDescription="Instantly search through all 50k of Trump's tweets"
        metaTitle="Search on Trump Twitter Archive"
      >
        { showTips && <Tips closeModal={() => this.setState({ showTips: !showTips })} /> }
        <DataSearch
          autosuggest={false}
          className={styles.searchbox}
          componentId="searchbox"
          dataField="text"
          debounce={400}
          placeholder="Search for anything..."
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
              and: ['dates', 'results', 'retweet', 'deleted', 'searchbox']
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
          <ToggleButton
            componentId="deleted"
            dataField="isDeleted"
            data={[
              { label: 'Hide Deleted', value: 'false' },
              { label: 'Only Deleted', value: 'true' },
            ]}
            multiSelect={false}
            style={{
              display: showDeletedButtons ? 'initial' : 'none',
            }}
            URLParams={true}
          />
        </div>
        <div className={styles.toggles}>
          <Button
            onClick={() => this.setState({ showTips: !showTips })}
            selected={showTips}
          >
            <TextSwitch mobile="Tips" web="Search tips"/>
          </Button>
          <Button
            onClick={() => this.setState({ showRetweetButtons: !showRetweetButtons })}
            selected={showRetweetButtons}
          >
            <TextSwitch mobile="Retweets" web="Retweet filters"/>
          </Button>
          <Button
            onClick={() => this.setState({ showDeletedButtons: !showDeletedButtons })}
            selected={showDeletedButtons}
          >
            <TextSwitch mobile="Deleted" web="Deleted filters"/>
          </Button>
          <Button
            onClick={() => this.setState({ showDateRange: !showDateRange })}
            selected={showDateRange}
          >
            <TextSwitch mobile="Dates" web="Date filters"/>
          </Button>
          <Button
            className={styles.hideOnMobile}
            onClick={() => this.setState({ showDeviceDropdown: !showDeviceDropdown })}
            selected={showDeviceDropdown}
          >
            Device filters
          </Button>
          <Button
            className={styles.hideOnMobile}
            onClick={() => this.setState({ showExportModal: !showExportModal })}
            selected={showExportModal}
          >
            Export
          </Button>
        </div>
        <ReactiveList
          className={styles.list}
          componentId="results"
          dataField="text"
          infiniteScroll={true}
          onData={({ resultStats }) => this.setState({ total: resultStats?.numberOfResults })}
          react={{
            and: ['dates', 'device', 'retweet', 'deleted', 'searchbox']
          }}
          render={this.tweets.bind(this)}
          renderNoResults={() => (
            <div className={styles.noResults}>
              <p>No tweets found.</p>
              <p>Not finding what you expect? Take a look at the <span onClick={() => this.setState({ showTips: !showTips })}>search tips</span>.</p>
            </div>
          )}
          renderResultStats={({ numberOfResults }) => (
            <p>
              <span className={styles.results}>{numberWithCommas(numberOfResults)}</span> <TextSwitch mobile="tweets" web="tweets found"/>
            </p>
          )}
          size={showExportModal ? 100 : 25}
          sortOptions={[
            { dataField: 'date', label: 'Latest', sortBy: 'desc'},
            { dataField: 'date', label: 'Oldest', sortBy: 'asc'},
            { dataField: 'favorites', label: 'Most Likes', sortBy: 'desc'},
            { dataField: 'retweets', label: 'Most Retweets', sortBy: 'desc'},
          ]}
          URLParams={true}
        />
        <div className={styles.endOfResult} id="endOfResult"/>
        { showExportModal && (
          <Export close={() => this.setState({ showExportModal: false })} total={total} />
        )}
      </Page>
    );
  }
}
