import React from 'react';
import ExternalLink from '@/external-link';
import LineGraph from '@/line-graph';
import data from './debt.data';

export default class Debt extends React.Component {
  render() {
    return (
      <div id="debt">
        <LineGraph
          data={data}
          formatter={value => `$${(value / 1000000).toFixed(2)} tril`}
          id="debt"
          source={
            <ExternalLink
              href="https://tradingeconomics.com/united-states/government-debt"
              title="View data on TradingEconomics.com"
            >
              TradingEconomics.com | World Bank
            </ExternalLink>
          }
          title="US Debt"
          yMin={0}
        />
      </div>
    );
  }
}
