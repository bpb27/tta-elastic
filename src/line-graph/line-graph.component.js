import React from 'react';
import { arrayOf, bool, func, number, oneOf, oneOfType, shape, string } from 'prop-types';
import Chart from 'react-apexcharts';
import { format } from 'date-fns';
import Button from 'components/button';
import ExternalLink from 'components/external-link';
import styles from './line-graph.style.scss';
import {
  demBlueCurrent,
  demBluePast,
  groupByPresident,
  repRedCurrent,
  repRedPast,
} from './line-graph.utils';

export default class LineGraph extends React.Component {
  static propTypes = {
    data: arrayOf(shape({
      x: oneOfType([number, string]),
      y: oneOfType([number, string]),
    })).isRequired,
    formatter: func.isRequired,
    hideTimeframe: bool,
    id: string.isRequired,
    source: string.isRequired,
    timeframe: oneOf(['15y', '30y', 'full']),
    title: string.isRequired,
    yMin: number,
  }

  state = {
    timeframe: this.props.timeframe,
  }

  get xRange () {
    const date = value => new Date(value).getTime();
    if (this.state.timeframe === '15y') {
      return { min: date('01-01-2005'), max: date('01-01-2021') };
    } else if (this.state.timeframe === '30y') {
      return { min: date('01-01-1990'), max: date('01-01-2021') };
    } else {
      return { min: undefined, max: undefined };
    }
  }

  render() {
    const series = groupByPresident(this.props.data);
    return (
      <div className={styles.lineGraph}>
        <div>
          <div className={styles.title}>
            <h3>{ this.props.title }</h3>
            <p>Data from <ExternalLink href={this.props.source}>TradingEconomics.com | World Bank</ExternalLink></p>
          </div>
          <Chart
            options={{
              chart: {
                id: this.props.id,
                toolbar: {
                  show: false,
                },
              },
              colors: series.map(item => item.color),
              dataLabels: {
                enabled: false,
              },
              legend: {
                show: false,
              },
              responsive: [
                {
                  breakpoint: 1000,
                  options: {
                    chart: {
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
              xaxis: {
                ...this.xRange,
                type: 'datetime',
              },
              yaxis: {
                labels: {
                  formatter: this.props.formatter,
                },
                min: this.props.yMin,
              },
              zoom: false,
            }}
            series={series}
            type="area"
            width={700}
          />
          <div className={styles.legend}>
            <span><span style={{ background: demBluePast}}></span> Past Dems</span>
            <span><span style={{ background: repRedPast}}></span> Past Repubs</span>
            <span><span style={{ background: demBlueCurrent}}></span> Obama</span>
            <span><span style={{ background: repRedCurrent}}></span> Trump</span>
          </div>
          {
            !this.props.hideTimeframe && (
              <div className={styles.buttons}>
                <Button onClick={() => this.setState({ timeframe: 'full' })}>
                  Full set
                </Button>
                <Button onClick={() => this.setState({ timeframe: '30y' })}>
                  30 years
                </Button>
                <Button onClick={() => this.setState({ timeframe: '15y' })}>
                  15 years
                </Button>
              </div>
            )
          }
        </div>
      </div>
    );
  }
}
