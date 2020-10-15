import React from 'react';
import { array } from 'prop-types';
import { Link } from 'react-router-dom';
import { percentage } from 'utils/percentage';
import { numberWithCommas } from 'utils/format';
import { tweetsAsPresident } from '../frequency.utils';
import styles from './tweet-stats.style.scss';

const descriptions = {
  abortion: 'abortion or Roe v. Wade',
  approval: 'polls, ratings, crowds, or approval',
  climateChange: 'climate change (mostly mocking)',
  collusion: 'Russia, Mueller, collusion, hoaxes, impeachment, or related terms',
  covid: 'Coronavirus, COVID, or viruses in general',
  crime: 'crime, police, or law and order',
  debt: 'the debt or deficit',
  democrats: 'Democrats, liberals, leftists, Obama, Clinton, Biden, Schumer, or Pelosi',
  education: 'education, student debt, teachers, or related terms',
  election: 'the election, ballots, postal service, mail-ins, and related terms',
  entitlements: 'Social Security, Medicare, or Medicaid',
  fakeNews: 'fake news, the media, or outlets he dislikes like CNN and NYT',
  foxNews: 'Fox News and hosts like Sean Hannity',
  future: 'artificial intelligence, automation, clean energy/jobs, or universal basic income',
  guns: 'guns, the 2nd amendment, or the NRA (almost exclusively used as stock endorsements/disses for candidates)',
  healthcare: 'health care or ObamaCare and related terms like prescriptions, premiums, and deductibles',
  immigration: 'immigration, border security, or the wall',
  jobs: 'jobs, labor, workers, wages, or employment',
  military: 'the military or veterans (many stock endorsements for Republican candidates)',
  minimumWage: 'minimum wage',
  negativity: 'negative words like terrible or horrible, or insults like loser and stupid',
  religion: 'Christianity, God, Jesus, the bible, or religion',
  republicans: 'Republicans, conservatives, McConnell, McCarthy, Ryan, Bush, Romney, or McCain',
  stocks: 'stocks, DOW, NASDAQ, or the market',
  taxes: 'taxes',
  trade: 'trade, tariffs, or the WTO',
  trump: 'Trump (saying his own name)',
};

export default class TweetStats extends React.Component {
  static propTypes = {
    byMonth: array,
    topics: array,
  }

  static defaultProps = {
    byMonth: [],
    topics: [],
  }

  get totalAsPresident () {
    return this.props.topics.find(stat => stat.name === 'totalAsPresident')?.total;
  }

  get data () {
    const { topics } = this.props;
    const totalAsPresident = tweetsAsPresident(topics).total;
    return topics
      .filter(stat => stat.name !== 'totalAsPresident')
      .sort((a, b) => Number(b.total) - Number(a.total))
      .map(stat => ({
        ...stat,
        percentage: percentage(stat.total, totalAsPresident, stat.total > 200 ? 0 : 1),
      }));
  }

  render () {
    return (
      <div className={styles.tweetStats}>
        {
          this.data.map(({ name, percentage, search, total }) => (
            <div key={name}>
              <Link
                rel="noopener noreferrer"
                target="_blank"
                title="View on search page"
                to={`/?results=1&searchbox="${search}"&dates=["2017-01-19"%2C"2020-12-30"]`}
              >
                <span className={styles.total}>
                  {numberWithCommas(total)} tweet{ total === 1 ? '' : 's'} | {percentage}
                </span>
              </Link>
              <p>{ descriptions[name] || name }</p>
            </div>
          ))
        }
      </div>
    );
  }
}
