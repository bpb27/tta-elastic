import React, { lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import styles from './insights.style.scss';

const BadHiresPage = lazy(() => import('./bad-hires'));
const EconomyPage = lazy(() => import('./economy'));
const FrequencyPage = lazy(() => import('./frequency'));
const SexualAssaultPage = lazy(() => import('./sexual-assault'));

export default class Insights extends React.Component {
  render () {
    return (
      <div className={styles.insights}>
        <Suspense fallback={<div/>}>
          <Switch>
            <Route path="/insights/bad-hires" component={BadHiresPage}/>
            <Route path="/insights/economy" component={EconomyPage}/>
            <Route path="/insights/frequency" component={FrequencyPage}/>
            <Route path="/insights/sexual-assault" component={SexualAssaultPage}/>
            <Redirect to="/insights/frequency"/>
          </Switch>
        </Suspense>
      </div>
    );
  }
}
