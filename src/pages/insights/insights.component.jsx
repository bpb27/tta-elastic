import React, { lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import styles from './insights.module.scss';
import EconomyPage from './economy';
import InsultsPage from './insults';
import FrequencyPage from './frequency';
import PastPage from './past';
import SexualAssaultPage from './sexual-assault';
import YellingPage from './yelling';

export default class Insights extends React.Component {
  render() {
    return (
      <div className={styles.insights}>
        <Switch>
          <Route path="/insights/economy" component={EconomyPage} />
          <Route path="/insights/frequency" component={FrequencyPage} />
          <Route path="/insights/insults" component={InsultsPage} />
          <Route path="/insights/past" component={PastPage} />
          <Route path="/insights/sexual-assault" component={SexualAssaultPage} />
          <Route path="/insights/yelling" component={YellingPage} />
          <Redirect to="/insights/frequency" />
        </Switch>
      </div>
    );
  }
}
