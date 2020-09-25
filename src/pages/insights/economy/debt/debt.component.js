import React from 'react';
import LineGraph from 'components/line-graph';
import data from './debt.data';

export default class Debt extends React.Component {
  render () {
    return (
      <div id="debt">
        <LineGraph
          data={data}
          formatter={value => `$${(value / 1000000).toFixed(2)} tril`}
          id="debt"
          source="https://tradingeconomics.com/united-states/government-debt"
          title="US Debt"
          yMin={0}
        />
      </div>
    );
  }
}
