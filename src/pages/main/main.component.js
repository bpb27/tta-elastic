import React from 'react';
import LatestTweets from 'components/latest-tweets';
import ListBadHires from 'components/lists/bad-hires';
import ListDog from 'components/lists/dog';
import ListTreason from 'components/lists/treason';
import GraphDebt from 'components/line-graph/debt';
import GraphGDP from 'components/line-graph/gdp';
import GraphGDPQuarterly from 'components/line-graph/gdp-quarterly';
import GraphUnemployment from 'components/line-graph/unemployment';
import styles from './main.style.scss';

export default class Main extends React.Component {
  render () {
    return (
      <div className={styles.main}>
        <GraphUnemployment/>
        <GraphGDP/>
        <GraphGDPQuarterly/>
        <GraphDebt/>
        <LatestTweets/>
        <ListBadHires/>
        <ListTreason/>
        <ListDog/>
      </div>
    );
  }
}
