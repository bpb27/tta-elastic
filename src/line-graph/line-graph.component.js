import React from 'react';
// import { string } from 'prop-types';
import Chart from 'react-apexcharts';
import './line-graph.style.scss';

export default class LineGraph extends React.Component {
  get options () {
    return ({
      chart: {
        id: 'basic-bar'
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
      }
    });
  }

  get series () {
    return ([
      {
        name: 'tweets',
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }
    ]);
  }

  render() {
    return (
      <div className="lineGraph">
        <Chart
          options={this.options}
          series={this.series}
          type="line"
          width="500"
        />
      </div>
    );
  }
}
