import React from 'react';
import { arrayOf, func, number, oneOfType, shape, string } from 'prop-types';
import Chart from 'react-apexcharts';
import { addYears, format, subYears } from 'date-fns';
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
    formatter: func.isRequired,
    id: string.isRequired,
    data: arrayOf(shape({
      x: oneOfType([number, string]),
      y: oneOfType([number, string]),
    })).isRequired,
    source: string.isRequired,
    title: string.isRequired,
    xAxis: shape({
      max: number,
      min: number,
      yearInterval: number,
    }),
    yMin: number,
  }

  state = {
    xMax: this.props.xAxis?.max,
    xMin: this.props.xAxis?.min,
  }

  get yearInterval () {
    return this.props.xAxis?.yearInterval;
  }

  prev = () => {
    this.setState({
      xMin: subYears(this.state.xMin, this.yearInterval).getTime(),
      xMax: subYears(this.state.xMax, this.yearInterval).getTime(),
    });
  }

  next = () => {
    this.setState({
      xMin: addYears(this.state.xMin, this.yearInterval).getTime(),
      xMax: addYears(this.state.xMax, this.yearInterval).getTime(),
    });
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
                max: this.state.xMax,
                min: this.state.xMin,
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
            <span><span style={{ background: demBluePast}}></span> Past Democrats</span>
            <span><span style={{ background: repRedPast}}></span> Past Republicans</span>
            <span><span style={{ background: demBlueCurrent}}></span> Obama</span>
            <span><span style={{ background: repRedCurrent}}></span> Trump</span>
          </div>
          {
            this.yearInterval && (
              <div className={styles.buttons}>
                <Button onClick={this.prev}>
                  Back
                </Button>
                <Button onClick={this.next}>
                  Forward
                </Button>
              </div>
            )
          }
        </div>
      </div>
    );
  }
}
