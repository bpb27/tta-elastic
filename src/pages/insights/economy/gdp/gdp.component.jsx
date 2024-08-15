import React from 'react';
import ExternalLink from '@/external-link';
import LineGraph from '@/line-graph';
import data from './gdp.data';

export default class Gdp extends React.Component {
  render() {
    return (
      <div id="graph-gdp">
        <LineGraph
          data={data}
          formatter={value => `$${(value / 1000).toFixed(2)} tril`}
          id="gdp"
          source={
            <ExternalLink
              href="https://tradingeconomics.com/united-states/gdp"
              title="View data on TradingEconomics.com"
            >
              TradingEconomics.com | World Bank
            </ExternalLink>
          }
          title="US GDP"
          yMin={0}
        />
      </div>
    );
  }
}
