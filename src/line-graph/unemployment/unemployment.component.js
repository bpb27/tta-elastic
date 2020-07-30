import React from 'react';
import LineGraph from 'components/line-graph';
import data from './unemployment.data';

export default class Unemployment extends React.Component {
  render () {
    return (
      <div id="graph-unemployment">
        <LineGraph
          colors={['#7cb8ef', '#d66e6e', '#3799f1', '#d30002']}
          formatter={value => `${value}%`}
          id="unemployment"
          series={data}
          source="https://tradingeconomics.com/united-states/unemployment-rate"
          title="US Unemployment Rate 2000-2020"
        />
      </div>
    );
  }
}
