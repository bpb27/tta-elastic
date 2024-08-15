import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ReactiveBase } from '@appbaseio/reactivesearch';
import Navbar from '@/navbar';
import styles from './app.style.scss';
import './app.style.css';

const FaqPage = lazy(() => import('@/pages/faq'));
const InsightsPage = lazy(() => import('@/pages/insights'));
const SearchPage = lazy(() => import('@/pages/search'));

export default class App extends React.Component {
  render() {
    return (
      <div className={styles.app}>
        <ReactiveBase
          app="trump_tweets"
          url="https://public-key:mfpzsrhddvm7f54ctotnjbhqczu0z35t@thorin-us-east-1.searchly.com"
        >
          <BrowserRouter>
            <Navbar />
            <Suspense fallback={<div />}>
              <Switch>
                <Route path="/faq" component={FaqPage} />
                <Route path="/insights" component={InsightsPage} />
                <Route component={SearchPage} />
              </Switch>
            </Suspense>
          </BrowserRouter>
        </ReactiveBase>
      </div>
    );
  }
}
