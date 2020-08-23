import React from 'react';
import { string } from 'prop-types';
import Chart from 'react-apexcharts';
import data from './tweet-frequency.data';
import Button from 'components/button';
// import styles from './tweet-frequency.style.scss';

const DATA = data.sort((a, b) => new Date(b.date) - new Date(a.date)).reverse();
const INC = 500;
// TODO: pull from cached API endpoint

export default class TweetFrequency extends React.Component {
  static propTypes = {
    name: string,
  }

  state = {
    data: DATA.slice(0, INC),
    end: INC,
    inc: INC,
    start: 0,
  }

  changeInc ({ target }) {
    const inc = Number(target.value);
    const end = this.state.start;
    const start = this.state.start - inc;
    this.setState({ inc }, () => this.set(start, end));
  }

  prev () {
    const end = this.state.end + this.state.inc;
    const start = this.state.start + this.state.inc;
    this.set(start, end);
  }

  next () {
    const end = this.state.end - this.state.inc;
    const start = this.state.start - this.state.inc;
    this.set(start, end);
  }

  set (start, end) {
    const max = DATA.length + this.state.inc;
    const min = 0;
    if (end <= max && start >= min) {
      this.setState({ data: DATA.slice(start, end), end, start });
    }
  }

  render () {
    return (
      <div>
        <div>
          <Button onClick={this.prev.bind(this)}>Back</Button>
          <Button onClick={this.next.bind(this)}>Forward</Button>
          {/* <select
            name="increment"
            onChange={this.changeInc.bind(this)}
            value={String(this.state.inc)}
          >
            <option value="7">7</option>
            <option value="30">30</option>
            <option value="100">100</option>
            <option value="500">500</option>
          </select> */}
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
            xaxis: {
              type: 'datetime',
            },
            yaxis: {
              max: 200,
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
