import React from 'react';
import { arrayOf, number, shape, string } from 'prop-types';
import { format } from 'date-fns';
import Chart from 'react-apexcharts';
import Button from 'components/button';
import styles from './tweet-frequency.style.scss';

// TODO: deltas compared to prior
// TODO: go to date selector
// const DATA = data.sort((a, b) => new Date(b.date) - new Date(a.date)).reverse();

export default class TweetFrequency extends React.Component {
  static propTypes = {
    byDay: arrayOf(shape({
      date: string.isRequired,
      count: number.isRequired
    })),
    byMonth: arrayOf(shape({
      date: string.isRequired,
      count: number.isRequired
    })),
    byWeek: arrayOf(shape({
      date: string.isRequired,
      count: number.isRequired
    })),
  }

  constructor(props) {
    super(props);

    const startingInc = window.innerWidth <= 700 ? 100 : 500;

    this.state = {
      data: this.props.groupings.byMonth?.slice(0, startingInc) || [],
      end: startingInc,
      inc: startingInc,
      start: 0,
      unit: 'byMonth',
    };
  }

  get data () {
    return this.state.data[this.state.unit] || [];
  }

  changeInc = ({ target }) => {
    const inc = Number(target.value);
    this.setState({ inc }, () => this.set(0, inc));
  }

  prev = () => {
    const end = this.state.end + this.state.inc;
    const start = this.state.start + this.state.inc;
    this.set(start, end);
  }

  next = () => {
    const end = this.state.end - this.state.inc;
    const start = this.state.start - this.state.inc;
    this.set(start, end);
  }

  set = (start, end) => {
    const max = this.data.length + this.state.inc;
    const min = 0;
    if (end <= max && start >= min) {
      this.setState({ data: this.data.slice(start, end), end, start });
    }
  }

  render () {
    return (
      <div>
        <div className={styles.controls}>
          <Button onClick={this.prev}>Back</Button>
          <Button onClick={this.next}>Forward</Button>
          <select
            name="increment"
            onChange={this.changeInc}
            value={String(this.state.inc)}
          >
            <option value="7">7</option>
            <option value="30">30</option>
            <option value="100">100</option>
            <option value="360">360</option>
            <option value="500">500</option>
          </select>
          <select
            name="unit"
            onChange={({ target }) => this.setState({ unit: target.value })}
            value={this.state.unit}
          >
            <option value="byDay">Day</option>
            <option value="byWeek">Week</option>
            <option value="byMonth">Month</option>
          </select>
        </div>
        <Chart
          options={{
            chart: {
              id: 'freq',
              toolbar: {
                tools: {
                  download: true,
                  selection: true,
                  zoom: false,
                  zoomin: false,
                  zoomout: false,
                  pan: false,
                  reset: false,
                },
              },
            },
            dataLabels: {
              enabled: false,
            },
            title: {
              align: 'center',
              style: {
                fontFamily: 'serif',
                fontSize: '30px',
              },
              text: 'Frequency',
            },
            tooltip: {
              x: {
                formatter: date => format(date, 'MMM dd, yyyy'),
              },
            },
            xaxis: {
              type: 'datetime',
            },
            yaxis: {
              // max: 200,
              min: 0,
            },
          }}
          series={[
            {
              name: 'Frequency',
              data: this.state.data.map(item => ({
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
