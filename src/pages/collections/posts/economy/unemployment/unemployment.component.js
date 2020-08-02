import React from 'react';
import LineGraph from 'components/line-graph';
import data from './unemployment.data';

export default class Unemployment extends React.Component {
  render () {
    return (
      <div id="graph-unemployment">
        <LineGraph
          data={data}
          formatter={value => `${value}%`}
          id="unemployment"
          source="https://tradingeconomics.com/united-states/unemployment-rate"
          title="US Unemployment Rate"
        />
      </div>
    );
  }
}
