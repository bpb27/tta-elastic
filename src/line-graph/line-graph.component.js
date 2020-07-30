import React from 'react';
import { array, arrayOf, func, number, shape, string } from 'prop-types';
import Chart from 'react-apexcharts';
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
        x: number,
        y: number,
      })).isRequired,
      name: string.isRequired,
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
              },
              colors: this.props.colors,
              dataLabels: {
                enabled: false,
              },
              tooltip: {
                x: {
                  formatter: year => {
                    const yearRounded = year.toString().split('.')[0];
                    if (year.toString().includes('.99')) return `December ${yearRounded}`;
                    if (year.toString().includes('.75')) return `September ${yearRounded}`;
                    if (year.toString().includes('.5')) return `June ${yearRounded}`;
                    if (year.toString().includes('.25')) return `March ${yearRounded}`;
                    if (year.toString().includes('.01')) return `March ${yearRounded}`;
                    if (year.toString().includes('.9')) return 'End of term';
                    if (year === 2020) return '2020 (projected)';
                    return year;
                  },
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
                labels: {
                  formatter: value => value.toFixed(0),
                },
                tickAmount: '10',
              },
              yaxis: {
                labels: {
                  formatter: this.props.formatter,
                },
              }
            }}
            series={this.props.series}
            type="area"
            width={ window.innerWidth > 700 ? 700 : undefined }
          />
          <p>Data from <ExternalLink href={this.props.source}>TradingEconomics.com | World Bank</ExternalLink></p>
        </div>
      </div>
    );
  }
}
