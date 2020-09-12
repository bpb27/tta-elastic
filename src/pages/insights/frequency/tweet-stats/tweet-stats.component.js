import React from 'react';
import { array } from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './tweet-stats.style.scss';
import { percentage } from 'utils/percentage';
import { daysAsPresident } from 'utils/date';
import { numberWithCommas } from 'utils/format';

const descriptions = {
  abortion: 'about abortion or Roe v. Wade',
  approval: 'about polls, ratings, crowds, or approval',
  climateChange: 'about climate change (all mocking it)',
  collusion: 'about Russia, Mueller, collusion, impeachment, or related terms',
  covid: 'about Coronavirus, COVID, or viruses in general',
  crime: 'about crime, police, or law and order',
  debt: 'about the debt or deficit',
  democrats: 'about Democrats, Obama, Clinton, Biden, Schumer, or Pelosi',
  education: 'about education, student debt, teachers, or related terms',
  entitlements: 'about Social Security, Medicare, or Medicaid',
  fakeNews: 'about fake news, the media, or outlets he dislikes like CNN and NYT',
  foxNews: 'about Fox News and hosts like Sean Hannity',
  future: 'about artificial intelligence, automation, clean energy/jobs, or universal basic income',
  guns: 'about guns, the 2nd amendment, or the NRA (almost exclusively used as stock endorsements/disses for candidates)',
  healthcare: 'about health care or ObamaCare and related terms like prescriptions, premiums, and deductibles',
  immigration: 'about immigration, border security, or the wall',
  jobs: 'about jobs, labor, workers, wages, or employment',
  military: 'about the military or veterans (many stock endorsements for Republican candidates)',
  minimumWage: 'about minimum wage (a retweet of Ivanka, later deleted)',
  negativity: 'with negative words like terrible or horrible, or insults like loser and stupid',
  religion: 'about Christianity, God, Jesus, the bible, or religion',
  stocks: 'about stocks, DOW, NASDAQ, or the market',
  taxes: 'about taxes',
  trade: 'about trade, tariffs, or the WTO',
};

export default class TweetStats extends React.Component {
  static propTypes = {
    topics: array,
  }

  static defaultProps = {
    topics: [],
  }

  get totalAsPresident () {
    return this.props.topics.find(stat => stat.name === 'totalAsPresident')?.total;
  }

  get data () {
    return this.props.topics
      .filter(stat => stat.name !== 'totalAsPresident')
      .sort((a, b) => b.total > a.total)
      .map(stat => ({ ...stat, percentage: percentage(stat.total, this.totalAsPresident, stat.total > 200 ? 0 : 1) }));
  }

  render () {
    const total = this.totalAsPresident;
    const days = daysAsPresident();
    const avg = total ? Math.round(total / days) : 0;

    return (
      <div className={styles.tweetStats}>
        <h2>As president, Trump has tweeted <span className={styles.underline}>{ total ? numberWithCommas(total) : '...' }</span> times, averaging <span className={styles.underline}>{ avg || '...' }</span> per day.</h2>
        {
          this.data.map(({ name, percentage, search, total }) => {
            // const perDay = Math.round(total / days);
            return (
              <div key={name}>
                <Link
                  rel="noopener noreferrer"
                  target="_blank"
                  title="View on search page"
                  to={`/?results=1&searchbox="${search}"&dates=["2017-01-19"%2C"2020-12-30"]`}
                >
                  <span className={styles.total}>
                    {numberWithCommas(total)}{' '}|{' '}{percentage}
                  </span>
                </Link>
                <span>{ descriptions[name] || name }</span>
              </div>
            );
          })
        }
      </div>
    );
  }
}
