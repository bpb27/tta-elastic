import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ReactiveBase } from '@appbaseio/reactivesearch';
import FaqPage from 'components/pages/faq';
import CollectionsPage from 'components/pages/collections';
import SearchPage from 'components/pages/search';
import Navbar from 'components/navbar';
import styles from './app.style.scss';

export default class App extends React.Component {
  render () {
    return (
      <div className={styles.app}>
        <ReactiveBase app="tweets" url="https://public-key:mfpzsrhddvm7f54ctotnjbhqczu0z35t@thorin-us-east-1.searchly.com">
          <BrowserRouter>
            <Navbar />
            <Switch>
              <Route path="/faq" component={FaqPage} />
              <Route path="/collections" component={CollectionsPage} />
              <Route component={SearchPage} />
            </Switch>
          </BrowserRouter>
        </ReactiveBase>
      </div>
    );
  }
}
