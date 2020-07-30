import React from 'react';
import LineGraph from 'components/line-graph';
import data from './gdp-quarterly.data';

export default class GdpQuarterly extends React.Component {
  render () {
    return (
      <div id="graph-gdp-quarterly">
        <LineGraph
          colors={['#7cb8ef', '#d66e6e', '#3799f1', '#d30002']}
          formatter={value => `${value}%`}
          id="gdp-quarterly"
          series={data}
          source="https://tradingeconomics.com/united-states/gdp-growth-annual"
          title="US GDP Quarterly Growth 2000-2020"
        />
      </div>
    );
  }
}
