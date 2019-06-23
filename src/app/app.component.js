import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ReactiveBase } from '@appbaseio/reactivesearch';
import MainPage from '../pages/main';
import SearchPage from '../pages/search';
import './app.style.scss';

export default class App extends React.Component {
  render () {
    return (
      <div className="app">
        <ReactiveBase
          app="trump"
          url="https://public-key:mfpzsrhddvm7f54ctotnjbhqczu0z35t@thorin-us-east-1.searchly.com"
        >
          <BrowserRouter>
            <Switch>
              <Route path="/search" component={SearchPage} />
              <Route component={MainPage} />
            </Switch>
          </BrowserRouter>
        </ReactiveBase>
      </div>
    );
  }
}
