import React from 'react';
import ExternalLink from 'components/external-link';
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
          source={
            <ExternalLink href="https://tradingeconomics.com/united-states/unemployment-rate">
              TradingEconomics.com | World Bank
            </ExternalLink>
          }
          title="US Unemployment Rate"
        />
      </div>
    );
  }
}
