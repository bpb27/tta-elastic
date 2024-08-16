import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ReactiveBase } from '@appbaseio/reactivesearch';
import Navbar from '@/navbar';
import styles from './app.module.scss';
import './app.style.css';
import FaqPage from '@/pages/faq';
import InsightsPage from '@/pages/insights';
import SearchPage from '@/pages/search';

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
            <Switch>
              <Route path="/faq" component={FaqPage} />
              <Route path="/insights" component={InsightsPage} />
              <Route component={SearchPage} />
            </Switch>
          </BrowserRouter>
        </ReactiveBase>
      </div>
    );
  }
}
