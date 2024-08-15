import React from 'react';
import Page from '@/page';
import Paragraph from '@/paragraph';
import Skeleton from '@/skeleton';
import TweetFrequency from './tweet-frequency';
import TweetStats from './tweet-stats';
import { request } from 'utils/api';
import { tweetsAsPresident, tweetsInTheLastThreeMonths } from './frequency.utils';
import styles from './frequency.style.scss';

export default class Frequency extends React.Component {
  state = {
    data: null,
  };

  componentDidMount() {
    this.getStats();
  }

  async getStats() {
    const { data } = await request('/stats');
    this.setState({ data });
  }

  get asPresident() {
    const { data } = this.state;
    return data ? tweetsAsPresident(data.topics).formattedTotal : '.....';
  }

  get thisYearAvg() {
    const { data } = this.state;
    return data ? tweetsInTheLastThreeMonths(data.groupings.byDay).avg : '..';
  }

  render() {
    const { data } = this.state;
    return (
      <Page
        className={styles.page}
        tabTitle="How Many Tweets"
        metaDescription="How many times has Trump tweeted, and what does he tweet about?"
        metaTitle="How Many Tweets on Trump Twitter Archive"
      >
        <h1>How Many Tweets?</h1>
        <Paragraph>
          As president, Trump has tweeted <mark>{this.asPresident} times</mark>. In the last three
          months, Trump is averaging <mark> {this.thisYearAvg} tweets</mark> per day.
        </Paragraph>
        <div className={styles.frequencyContainer}>
          <TweetFrequency
            day={data?.groupings.byDay}
            month={data?.groupings.byMonth}
            week={data?.groupings.byWeek}
          />
        </div>
        <h2>What is he tweeting about?</h2>
        <Paragraph>
          Trump tweets whatever is on his mind. Here are the topics that occupy his headspace as
          president.
        </Paragraph>
        <div className={styles.statsContainer}>
          {data ? (
            <TweetStats byMonth={data?.groupings.byMonth} topics={data?.topics} />
          ) : (
            <Skeleton count={27} height="61px" width="60%" />
          )}
        </div>
        {/* <hr/>
        <h2>Light Editorial Commentary</h2>
        <Paragraph>
          Trump's Twitter attention is spent disparaging Democrats, complaining about negative stories, and decrying the injustice of the Russia investigation and impeachment proceedings.
        </Paragraph>
        <Paragraph>
          Trump views himself as a strong leader, master dealmaker, media expert, and perhaps the most accomplished president in history, yet he spends an astounding amount of time complaining.
        </Paragraph>
        <Paragraph>
          Self-pity on social media is a bad look, especially coming from the President of the United States.
        </Paragraph> */}
      </Page>
    );
  }
}
