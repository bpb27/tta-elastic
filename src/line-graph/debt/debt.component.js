import React from 'react';
import LineGraph from 'components/line-graph';
import { groupByPresident } from '../line-graph.utils';
import data from './debt.data';

export default class Debt extends React.Component {
  render () {
    return (
      <div id="debt">
        <LineGraph
          colors={['#7cb8ef', '#d66e6e', '#3799f1', '#d30002']}
          formatter={value => `$${(value / 1000000).toFixed(2)} tril`}
          id="debt"
          series={groupByPresident(data)}
          source="https://tradingeconomics.com/united-states/government-debt"
          title="US Debt"
        />
      </div>
    );
  }
}
