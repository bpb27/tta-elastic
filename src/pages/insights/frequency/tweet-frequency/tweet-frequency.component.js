import React from 'react';
import { arrayOf, number, oneOfType, shape, string } from 'prop-types';
import { format } from 'date-fns';
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

  constructor (props) {
    super(props);
    this.state = {
      options: {
        chart: {
          animations: {
            enabled: true,
          },
          height: 300,
          id: 'freq',
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
          min: new Date('2009-05-03').getTime(),
          max: new Date().getTime(),
          type: 'datetime',
        },
        yaxis: {
          min: 0,
          max: 1200,
          tickAmount: 6,
        },
      },
      unit: 'month',
    };
  }

  get data () {
    return this.props[this.state.unit] || [];
  }

  updateSelection = unit => {
    const options = {
      chart: {
        animations: {
          enabled: false,
        },
      },
    };

    if (unit === 'day') {
      const today = new Date();
      const sixMonthsAgo = new Date();
      sixMonthsAgo.setMonth(today.getMonth() - 6);
      options.xaxis = {
        min: sixMonthsAgo.getTime(),
        max: today.getTime(),
      };
      options.yaxis = {
        max: 240,
        tickAmount: 6,
      };
    }

    if (unit === 'week') {
      options.yaxis = {
        max: 600,
        tickAmount: 6,
      };
    }

    if (unit === 'month') {
      options.yaxis = {
        max: 1200,
        tickAmount: 6,
      };
    }

    this.setState({ options, unit });
  }

  render () {
    const { options, unit } = this.state;
    return (
      <div>
        <div className={styles.title}>
          <span>Tweets per </span>
          <select
            name="unit"
            onChange={({ target }) => this.updateSelection(target.value)}
            value={unit}
          >
            <option value="day">Day</option>
            <option value="week">Week</option>
            <option value="month">Month</option>
          </select>
        </div>
        <Chart
          options={options}
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
      </div>
    );
  }
}
