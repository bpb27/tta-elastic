import React from 'react';
import { arrayOf, func, number, oneOfType, shape, string } from 'prop-types';
import Chart from 'react-apexcharts';
import { format } from 'date-fns';
import { groupByPresident } from './line-graph.utils';
import ExternalLink from 'components/external-link';
import styles from './line-graph.style.scss';
import { FONT } from 'utils/constants';

// https://apexcharts.com/docs/react-charts/

export default class LineGraph extends React.Component {
  static propTypes = {
    formatter: func.isRequired,
    id: string.isRequired,
    data: arrayOf(shape({
      x: oneOfType([number, string]),
      y: oneOfType([number, string]),
    })).isRequired,
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
              colors: ['#7cb8ef', '#d66e6e', '#3799f1', '#d30002'],
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
                  fontFamily: FONT,
                  fontSize: '30px',
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
            series={groupByPresident(this.props.data)}
            type="area"
            width={700}
          />
          <p>Data from <ExternalLink href={this.props.source}>TradingEconomics.com | World Bank</ExternalLink></p>
        </div>
      </div>
    );
  }
}
