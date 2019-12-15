import React from 'react';
import { arrayOf, func, number, shape, string } from 'prop-types';
import Chart from 'react-apexcharts';
import styles from './line-graph.style.scss';

// https://apexcharts.com/docs/react-charts/

export default class LineGraph extends React.Component {
  static propTypes = {
    data: arrayOf(shape({
      x: number,
      y: number,
    })).isRequired,
    formatter: func.isRequired,
    id: string.isRequired,
    name: string.isRequired,
    title: string.isRequired,
  }

  addPresidentToYear (year) {
    switch (year) {
      case 2017: return '2017 (Trump takes office)';
      case 2009: return '2009 (Obama takes office)';
      case 2001: return '2001 (Bush takes office)';
      default: return year;
    }
  }

  render() {
    return (
      <div className={styles.lineGraph}>
        <Chart
          options={{
            chart: {
              id: this.props.id,
            },
            tooltip: {
              x: {
                formatter: this.addPresidentToYear.bind(this),
              },
            },
            title: {
              align: 'center',
              style: {
                fontSize: '24px',
              },
              text: this.props.title,
            },
            xaxis: {
              tickAmount: 'dataPoints',
            },
            yaxis: {
              labels: {
                formatter: this.props.formatter,
              },
            }
          }}
          series={[
            {
              data: this.props.data,
              name: this.props.name,
            }
          ]}
          type="line"
          width="700"
        />
      </div>
    );
  }
}
