import React from 'react';
import LineGraph from 'components/line-graph';
import data from './gdp-quarterly.data';

export default class GdpQuarterly extends React.Component {
  render () {
    return (
      <div id="graph-gdp-quarterly">
        <LineGraph
          data={data}
          formatter={value => `${value}%`}
          id="gdp-quarterly"
          source="https://tradingeconomics.com/united-states/gdp-growth-annual"
          title="US GDP Quarterly Growth"
        />
      </div>
    );
  }
}
