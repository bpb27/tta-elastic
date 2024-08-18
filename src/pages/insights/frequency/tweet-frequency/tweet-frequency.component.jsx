import React from 'react';
import { arrayOf, number, oneOfType, shape, string } from 'prop-types';
import { addDays, format, startOfTomorrow } from 'date-fns';
import Chart from 'react-apexcharts';
import Slider from 'rc-slider';
import styles from './tweet-frequency.module.scss';
import 'rc-slider/assets/index.css';

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);
const DATE_FORMAT = 'MMM dd, yyyy';
const underOneYearRange = (one, two) => {
  const yearInMs = 1000 * 60 * 60 * 24 * 365;
  return Math.abs(one - two) <= yearInMs;
};

const counts = arrayOf(
  shape({
    date: string.isRequired,
    count: oneOfType([number, string]).isRequired,
  })
);

export default class TweetFrequency extends React.Component {
  static propTypes = {
    day: counts,
    month: counts,
    week: counts,
  };

  static defaultProps = {
    day: [],
    month: [],
    week: [],
  };

  state = {
    animationEnabled: true,
    unit: 'week',
    xAxis: {
      max: startOfTomorrow().getTime(),
      min: new Date(2022, 4, 20).getTime(),
    },
    yAxis: {
      max: 600,
    },
  };

  get data() {
    return this.props[this.state.unit] || [];
  }

  handleSlide = value => {
    this.setState({
      xAxis: {
        max: value[1],
        min: value[0],
      },
    });
  };

  setUnit = unit => {
    const updates = {
      animationEnabled: true,
      unit,
      yAxis: {},
    };

    if (unit === 'day') {
      updates.yAxis = { max: 200 };
      updates.animationEnabled = false;
    } else if (unit === 'week') {
      updates.yAxis = { max: 600 };
    } else if (unit === 'month') {
      updates.yAxis = { max: 1500 };
    }

    this.setState(updates);
  };

  render() {
    const { animationEnabled, unit, xAxis, yAxis } = this.state;
    return (
      <div className={styles.container}>
        <div className={styles.title}>
          <span>Tweets per </span>
          <select name="unit" onChange={({ target }) => this.setUnit(target.value)} value={unit}>
            {/* {underOneYearRange(this.state.xAxis.min, this.state.xAxis.max) && (
              <option value="day">Day</option>
            )} */}
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
                formatter: date => format(date, DATE_FORMAT),
              },
            },
            xaxis: {
              type: 'datetime',
              ...xAxis,
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
        <div className={styles.slider}>
          <Range
            min={new Date(2009, 4, 1).getTime()}
            max={addDays(new Date(), 2)}
            defaultValue={[xAxis.min, xAxis.max]}
            tipFormatter={value => format(value, DATE_FORMAT)}
            tipProps={{
              placement: 'bottom',
            }}
            onAfterChange={this.handleSlide}
          />
        </div>
      </div>
    );
  }
}
