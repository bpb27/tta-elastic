import React from 'react';
import LineGraph from 'components/line-graph';
import data from './gdp.data';

export default class Gdp extends React.Component {
  render () {
    return (
      <div id="graph-gdp">
        <LineGraph
          data={data}
          formatter={value => `$${(value / 1000).toFixed(2)} tril`}
          id="gdp"
          source="https://tradingeconomics.com/united-states/gdp"
          title="US GDP"
          yMin={0}
        />
      </div>
    );
  }
}
