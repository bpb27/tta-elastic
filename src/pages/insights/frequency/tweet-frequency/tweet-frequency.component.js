import React from 'react';
import { arrayOf, number, oneOfType, shape, string } from 'prop-types';
import { format, startOfTomorrow, subYears } from 'date-fns';
import Button from 'components/button';
import Chart from 'react-apexcharts';
import styles from './tweet-frequency.style.scss';

// TODO: deltas compared to prior
// TODO: go to date selector

const counts = arrayOf(shape({
  date: string.isRequired,
  count: oneOfType([number, string]).isRequired,
}));

export default class TweetFrequency extends React.Component {
  static propTypes = {
    day: counts,
    month: counts,
    week: counts,
  }

  static defaultProps = {
    day: [],
    month: [],
    week: [],
  }

  state = {
    animationEnabled: true,
    timeframe: '3y',
    unit: 'week',
    yAxis: {
      max: 600,
    },
  }

  get data () {
    return this.props[this.state.unit] || [];
  }

  get xRange () {
    const { timeframe } = this.state;
    const tomorrow = startOfTomorrow();

    if (timeframe === 'full') {
      return {
        max: undefined,
        min: undefined,
      };
    } else {
      const years = Number(timeframe.replace('y', ''));
      return {
        max: tomorrow.getTime(),
        min: subYears(tomorrow, years).getTime(),
      };
    }
  }

  setTimeFrame = timeframe => {
    this.setState({ timeframe });
  }

  setUnit = unit => {
    const updates = {
      animationEnabled: true,
      unit,
      yAxis: {},
    };

    if (unit === 'day') {
      updates.yAxis = { max: 200 };
      updates.animationEnabled = false;
      updates.timeframe = '1y';
    } else if (unit === 'week') {
      updates.yAxis = { max: 600 };
    } else if (unit === 'month') {
      updates.yAxis = { max: 1400 };
    }

    this.setState(updates);
  }

  render () {
    const { animationEnabled, timeframe, unit, yAxis } = this.state;
    return (
      <div className={styles.container}>
        <div className={styles.title}>
          <span>Tweets per </span>
          <select
            name="unit"
            onChange={({ target }) => this.setUnit(target.value)}
            value={unit}
          >
            <option value="day">Day</option>
            <option value="week">Week</option>
            <option value="month">Month</option>
          </select>
        </div>
        <Chart
          options={{
            chart: {
              animations: {
                enabled: animationEnabled,
              },
              height: 300,
              id: 'freq',
              toolbar: {
                show: false,
              },
            },
            dataLabels: {
              enabled: false,
            },
            responsive: [
              {
                breakpoint: 700,
                options: {
                  chart: {
                    height: 300,
                  },
                },
              },
              {
                breakpoint: 2000,
                options: {
                  chart: {
                    height: 400,
                  },
                },
              },
            ],
            tooltip: {
              x: {
                formatter: date => format(date, 'MMM dd, yyyy'),
              },
            },
            xaxis: {
              ...this.xRange,
              type: 'datetime',
            },
            yaxis: {
              forceNiceScale: true,
              min: 0,
              tickAmount: 6,
              ...yAxis,
            },
          }}
          series={[
            {
              name: 'Tweets',
              data: this.data.map(item => ({
                x: item.date.split(' ')[0],
                y: item.count,
              })),
            },
          ]}
          type="bar"
        />
        <div className={styles.buttons}>
          <Button onClick={() => this.setTimeFrame('1y')} selected={timeframe === '1y'}>
            1 year
          </Button>
          <Button onClick={() => this.setTimeFrame('3y')} selected={timeframe === '3y'}>
            3 years
          </Button>
          <Button onClick={() => this.setTimeFrame('6y')} selected={timeframe === '6y'}>
            6 years
          </Button>
          <Button onClick={() => this.setTimeFrame('full')} selected={timeframe === 'full'}>
            Full set
          </Button>
        </div>
      </div>
    );
  }
}
