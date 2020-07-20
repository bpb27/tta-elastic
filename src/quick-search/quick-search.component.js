import React from 'react';
import { DataSearch } from '@appbaseio/reactivesearch';
import { tweetLink } from 'utils/links';
import styles from './quick-search.style.scss';

export default class QuickSearch extends React.Component {
  render () {
    return (
      <div className={styles.quickSearch}>
        <DataSearch
          autosuggest={true}
          componentId="search-suggestions"
          dataField="text"
          placeholder="Quick search..."
          onValueSelected={(value, cause, source) => {
            if (source) window.open(tweetLink(source.id), '_blank');
          }}
          queryFormat="and"
          searchOperators={true}
          showClear={true}
          URLParams={false}
        />
      </div>
    );
  }
}
