import React from 'react';
import { arrayOf, number, oneOfType, shape, string } from 'prop-types';
import { format } from 'date-fns';
import { capitalize } from 'utils/format';
import Chart from 'react-apexcharts';
import styles from './tweet-frequency.style.scss';
import { FONT } from 'utils/constants';

// TODO: deltas compared to prior
// TODO: go to date selector

const counts = arrayOf(shape({
  date: string.isRequired,
  count: oneOfType([number, string]).isRequired,
}));

export default class TweetFrequency extends React.Component {
  static propTypes = {
    day: counts.isRequired,
    month: counts.isRequired,
    week: counts.isRequired,
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
          id: 'freq',
          animations: {
            enabled: true,
          },
        },
        dataLabels: {
          enabled: false,
        },
        title: {
          align: 'center',
          style: {
            fontFamily: FONT,
            fontSize: '30px',
          },
          text: 'Tweet Frequency by Month',
        },
        tooltip: {
          x: {
            formatter: date => format(date, 'MMM dd, yyyy'),
          },
        },
        xaxis: {
          min: undefined,
          max: undefined,
          type: 'datetime',
        },
        yaxis: {
          min: 0,
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
      title: {
        text: `Tweet Frequency by ${capitalize(unit)}`,
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
    }

    this.setState({ options, unit });
  }

  render () {
    const { options, unit } = this.state;
    return (
      <div>
        <div className={styles.controls}>
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
          height={500}
        />
      </div>
    );
  }
}
