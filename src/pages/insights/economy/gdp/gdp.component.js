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
          xAxis={{
            min: new Date('01-01-1992').getTime(),
            max: new Date('01-01-2021').getTime(),
            yearInterval: 5,
          }}
          yMin={0}
        />
      </div>
    );
  }
}
