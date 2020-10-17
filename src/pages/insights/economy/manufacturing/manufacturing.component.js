import React from 'react';
import ExternalLink from 'components/external-link';
import LineGraph from 'components/line-graph';
import data from './manufacturing.data';

export default class Manufacturing extends React.Component {
  render () {
    return (
      <div id="graph-manufacturing">
        <LineGraph
          data={data}
          formatter={value => `${(value / 1000).toFixed(2)} million`}
          id="manufacturing"
          source={
            <ExternalLink href="https://fred.stlouisfed.org/series/MANEMP" title="View data on fred.stlouisfed.org">
              FRED | St. Louis Federal Reserve
            </ExternalLink>
          }
          title="US Manufacturing Jobs"
        />
      </div>
    );
  }
}
