import React from 'react';
import ExternalLink from 'components/external-link';
import LineGraph from 'components/line-graph';
import data from './gdp-quarterly.data';

export default class GdpQuarterly extends React.Component {
  render () {
    return (
      <div id="graph-gdp-quarterly">
        <LineGraph
          data={data}
          formatter={value => `${value}%`}
          id="gdp-quarterly"
          source={
            <ExternalLink href="https://tradingeconomics.com/united-states/gdp-growth-annual">
              TradingEconomics.com | World Bank
            </ExternalLink>
          }
          title="US GDP Quarterly Growth"
        />
      </div>
    );
  }
}
