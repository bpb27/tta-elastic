import React, { lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import styles from './insights.style.scss';

const EconomyPage = lazy(() => import('./economy'));
const InsultsPage = lazy(() => import('./insults'));
const FrequencyPage = lazy(() => import('./frequency'));
const PastPage = lazy(() => import('./past'));
const SexualAssaultPage = lazy(() => import('./sexual-assault'));

export default class Insights extends React.Component {
  render () {
    return (
      <div className={styles.insights}>
        <Suspense fallback={<div/>}>
          <Switch>
            <Route path="/insights/economy" component={EconomyPage}/>
            <Route path="/insights/frequency" component={FrequencyPage}/>
            <Route path="/insights/insults" component={InsultsPage}/>
            <Route path="/insights/past" component={PastPage}/>
            <Route path="/insights/sexual-assault" component={SexualAssaultPage}/>
            <Redirect to="/insights/frequency"/>
          </Switch>
        </Suspense>
      </div>
    );
  }
}
