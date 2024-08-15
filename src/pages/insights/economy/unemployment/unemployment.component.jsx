import React from 'react';
import ExternalLink from '@/external-link';
import LineGraph from '@/line-graph';
import data from './unemployment.data';

export default class Unemployment extends React.Component {
  render() {
    return (
      <div id="graph-unemployment">
        <LineGraph
          data={data}
          formatter={value => `${value}%`}
          id="unemployment"
          source={
            <ExternalLink
              href="https://tradingeconomics.com/united-states/unemployment-rate"
              title="View data on TradingEconomics.com"
            >
              TradingEconomics.com | World Bank
            </ExternalLink>
          }
          title="US Unemployment Rate"
        />
      </div>
    );
  }
}
