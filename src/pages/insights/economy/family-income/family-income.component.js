import React from 'react';
import ExternalLink from 'components/external-link';
import LineGraph from 'components/line-graph';
import { numberWithCommas } from 'utils/format';
import data from './family-income.data';

export default class FamilyIncome extends React.Component {
  render () {
    return (
      <div id="graph-family-income">
        <LineGraph
          data={data}
          formatter={value => `$${numberWithCommas(value)}`}
          id="family-income"
          source={
            <ExternalLink href="https://fred.stlouisfed.org/series/MAFAINUSA646N">
              FRED | St. Louis Federal Reserve
            </ExternalLink>
          }
          title="US Average Family Income"
          yMin={0}
        />
      </div>
    );
  }
}
