import React from 'react';
import { string } from 'prop-types';
import { Link } from 'react-router-dom';
import ExternalLink from 'components/external-link';
import GraphDebt from './debt';
import GraphGDP from './gdp';
import GraphGDPQuarterly from './gdp-quarterly';
import GraphUnemployment from './unemployment';
import { Paragraph, Post } from 'components/pages/collections/post';
import styles from './economy.style.scss';

export default class Economy extends React.Component {
  static propTypes = {
    name: string,
  }

  render () {
    return (
      <Post className={styles.economy} date="August 1st, 2020" title="The Trump Economy">
        <Paragraph>
          Trump has tweeted about creating the greatest economy in history over <Link to='/?searchbox="greatest+%2B+economy'>20 times</Link>, saying things like <ExternalLink tweetId="1178067055226052609">"How do you impeach a President who has created the greatest Economy in the history of our Country"</ExternalLink>.
        </Paragraph>
        <GraphGDP/>
        <Paragraph>
          It's true that pure GDP is the highest it's ever been, and unemployment numbers were lower than they've been since 1954 (pre-COVID crash), however Trump also has the dubious distinction of presiding over the highest unemployment rate in history (14.7%) and the highest debt in US history ($26 trillion), but seems less eager to claim responsibility.
        </Paragraph>
        <GraphGDPQuarterly/>
        <Paragraph>
          Looking at the economic numbers under past presidents, the Trump economy was continuing the positive trends of steadily increasing GDP (2-3% per quarter) and declining employment post-2008 recession Obama economy.
        </Paragraph>
        <GraphUnemployment/>
        <GraphDebt/>
        <Paragraph>
          Taking credit for "the greatest economy in history" is a bit like being handed the baton at the last lap of a race with a big lead, and then stumbling at the finish line because you were too busy yelling at people about masks and hydroxychloroquine and they all got sick and scared and you tripped because you're a fucking idiot.
        </Paragraph>
      </Post>
    );
  }
}
