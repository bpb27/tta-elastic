import React, { lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import styles from './insights.style.scss';

const FrequencyPage = lazy(() => import('./frequency'));
const BadHiresPage = lazy(() => import('./bad-hires'));
const EconomyPage = lazy(() => import('./economy'));

export default class Insights extends React.Component {
  render () {
    return (
      <div className={styles.insights}>
        <Suspense fallback={<div/>}>
          <Switch>
            <Route path="/insights/frequency" component={FrequencyPage}/>
            <Route path="/insights/bad-hires" component={BadHiresPage}/>
            <Route path="/insights/economy" component={EconomyPage}/>
            <Redirect to="/insights/frequency"/>
          </Switch>
        </Suspense>
      </div>
    );
  }
}
