import React from 'react';
import { array, arrayOf, func, node, number, oneOfType, shape, string } from 'prop-types';
import Chart from 'react-apexcharts';
import { format } from 'date-fns';
import ExternalLink from 'components/external-link';
import styles from './line-graph.style.scss';

// https://apexcharts.com/docs/react-charts/

export default class LineGraph extends React.Component {
  static propTypes = {
    colors: array,
    formatter: func.isRequired,
    id: string.isRequired,
    series: arrayOf(shape({
      data: arrayOf(shape({
        x: oneOfType([number, string]),
        y: oneOfType([number, string]),
      })).isRequired,
      name: oneOfType([node, string]),
    })),
    source: string.isRequired,
    title: string.isRequired,
  }

  render() {
    return (
      <div className={styles.lineGraph}>
        <div>
          <Chart
            options={{
              chart: {
                id: this.props.id,
                toolbar: {
                  show: true,
                },
              },
              colors: this.props.colors,
              dataLabels: {
                enabled: false,
              },
              responsive: [
                {
                  breakpoint: 1000,
                  options: {
                    chart: {
                      toolbar: {
                        show: false,
                      },
                      width: '100%',
                    },
                  },
                },
              ],
              tooltip: {
                x: {
                  formatter: date => format(date, 'MMMM yyyy'),
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
                type: 'datetime',
              },
              yaxis: {
                labels: {
                  formatter: this.props.formatter,
                },
              },
              zoom: false,
            }}
            series={this.props.series}
            type="area"
            width={700}
          />
          <p>Data from <ExternalLink href={this.props.source}>TradingEconomics.com | World Bank</ExternalLink></p>
        </div>
      </div>
    );
  }
}
