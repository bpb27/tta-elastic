import React, { Fragment } from 'react';
import GraphDebt from 'components/line-graph/debt';
import GraphGDP from 'components/line-graph/gdp';
import GraphGDPQuarterly from 'components/line-graph/gdp-quarterly';
import GraphUnemployment from 'components/line-graph/unemployment';
import List from 'components/lists/list';
import ShowMore from 'components/lists/show-more';
import styles from './economy.style.scss';

// https://twitter.com/realdonaldtrump/status/726461507601612800

export default class Economy extends React.Component {
  state = {
    showMore: false,
  }

  render () {
    const { showMore } = this.state;
    return (
      <List className={styles.economy} header="Trump Economy">
        <GraphGDP/>
        <p className={styles.narrative}>Trump has tweeted about creating the greatest economy in history over 20 times, saying things like "How do you impeach a President who has created the greatest Economy in the history of our Country".</p>
        <p className={styles.narrative}>It's true that pure GDP is the highest it's ever been, and unemployment numbers were lower than they've been since 1954 (pre-COVID crash), however Trump also has the dubious distinction of presiding over the highest unemployment rate in history (14.7%) and the highest debt in US history ($26 trillion), but seems less eager to claim responsibility.</p>
        <ShowMore
          handleClick={() => this.setState({ showMore: !showMore })}
          isShowing={showMore}
        />
        {
          showMore && (
            <Fragment>
              <GraphGDPQuarterly/>
              <GraphUnemployment/>
              <GraphDebt/>
              <p className={styles.narrative}>Looking at the economic numbers under past presidents, the Trump economy was continuing the positive trends of steadily increasing GDP (2-3% per quarter) and declining employment post-2008 recession Obama economy.</p>
              <p className={styles.narrative}>Taking credit for "the greatest economy in history" is a bit like being handed the baton at the last lap of a race with a big lead, and then stumbling at the finish line because you were too busy yelling at people about masks and hydroxychloroquine and they all got sick and scared and you tripped because you're a fucking idiot.</p>
            </Fragment>
          )
        }
      </List>
    );
  }
}
