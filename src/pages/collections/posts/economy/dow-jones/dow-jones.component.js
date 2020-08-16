import React from 'react';
import { numberWithCommas } from 'utils/format';
import LineGraph from 'components/line-graph';
import data from './dow-jones.data';

export default class DowJones extends React.Component {
  render () {
    return (
      <div id="graph-down-jones">
        <LineGraph
          data={data}
          formatter={value => `${numberWithCommas(Math.round(value))}`}
          id="gdp"
          source="https://tradingeconomics.com/united-states/stock-market"
          title="Dow Jones Index"
        />
      </div>
    );
  }
}
