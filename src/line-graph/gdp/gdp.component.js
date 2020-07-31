import React from 'react';
import LineGraph from 'components/line-graph';
import { groupByPresident } from '../line-graph.utils';
import data from './gdp.data';

export default class Gdp extends React.Component {
  render () {
    return (
      <div id="graph-gdp">
        <LineGraph
          colors={['#7cb8ef', '#d66e6e', '#3799f1', '#d30002']}
          formatter={value => `$${(value / 1000).toFixed(2)} tril`}
          id="gdp"
          series={groupByPresident(data)}
          source="https://tradingeconomics.com/united-states/gdp"
          title="US GDP"
        />
      </div>
    );
  }
}
