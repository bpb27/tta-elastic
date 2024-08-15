import React from 'react';
import { func, number } from 'prop-types';
import Modal from '@/modal';
import { numberWithCommas } from 'utils/format';
import styles from './export.style.scss';

const pullTweets = () => {
  const elements = document.getElementsByClassName('ttaTweet');
  const tweets = [];
  for (var i = 0; i < elements.length; i++) {
    tweets.push(JSON.parse(elements[i].getAttribute('data-tweet')));
  }
  return tweets;
};

const lastIndex = () => {
  const elements = document.getElementsByClassName('ttaTweet');
  return Number(elements[elements.length - 1].getAttribute('data-order'));
};

export default class Export extends React.Component {
  static propTypes = {
    close: func.isRequired,
    total: number.isRequired,
  };

  state = {
    intervalId: null,
    isRunning: false,
    text: null,
  };

  get allowed() {
    const { total } = this.props;
    const { isRunning, text } = this.state;
    return (
      <div className={styles.allowed}>
        <p>
          This will take {((total / 100) * 2 + 5).toFixed(0)} seconds to prepare. The JSON will be
          rendered in a text box, which you can copy and paste into your text editor (and save with
          a .json file extension).
        </p>
        {text ? (
          <textarea readOnly={true} value={JSON.stringify(text)} />
        ) : (
          <button disabled={isRunning} onClick={this.start}>
            {isRunning ? 'Exporting...' : 'Start export'}
          </button>
        )}
      </div>
    );
  }

  get notAllowed() {
    return (
      <div>
        <p>
          Exporting is only allowed for searches with fewer than 2,000 results - please narrow your
          search.
        </p>
        <p>
          If you're looking for the full data set, it's available as a CSV file on the FAQs page.
        </p>
      </div>
    );
  }

  close = () => {
    const { intervalId } = this.state;
    if (intervalId) clearInterval(intervalId);
    this.props.close();
  };

  start = () => {
    const { total } = this.props;
    this.setState({ isRunning: true });
    var sameResult = 0;
    var intervalId = setInterval(() => {
      console.log('scrolling');
      document.getElementById('endOfResult').scrollIntoView();

      if (lastIndex() >= total) {
        console.log('same result');
        sameResult++;
      }

      if (sameResult > 3) {
        console.log('clearing interval');
        clearInterval(intervalId);
        this.setState({ isRunning: false, text: pullTweets() });
      }
    }, 2000);

    this.setState({ intervalId });
  };

  render() {
    const { total } = this.props;
    return (
      <Modal
        className={this.state.isRunning ? styles.isRunning : ''}
        closeModal={this.close}
        headerText={`Export ${numberWithCommas(total)} tweets as JSON`}
      >
        {total > 2000 ? this.notAllowed : this.allowed}
      </Modal>
    );
  }
}
