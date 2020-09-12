import React, { lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import styles from './collections.style.scss';

const TweetFrequencyPage = lazy(() => import('./tweet-frequency'));

export default class Collections extends React.Component {
  render () {
    return (
      <div className={styles.app}>
        <Suspense fallback={<div/>}>
          <Switch>
            <Route path="/insights/frequency" component={TweetFrequencyPage}/>
            <Redirect to="/insights/frequency"/>
          </Switch>
        </Suspense>
      </div>
    );
  }
}
