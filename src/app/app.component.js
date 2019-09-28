import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ModalContainer, ModalRoute } from 'react-router-modal';
import { ReactiveBase } from '@appbaseio/reactivesearch';
import MainPage from 'components/pages/main';
import SearchPage from 'components/pages/search';
import Navbar from 'components/navbar';
import Tips from 'components/tips';
import './app.style.scss';

export default class App extends React.Component {
  render () {
    return (
      <div className="app">
        <ReactiveBase
          app="tweets"
          url="https://public-key:mfpzsrhddvm7f54ctotnjbhqczu0z35t@thorin-us-east-1.searchly.com"
        >
          <BrowserRouter>
            <Navbar />
            <ModalContainer />
            <Switch>
              <Route path="/search" component={SearchPage} />
              <Route component={MainPage} />
            </Switch>
            <ModalRoute path='/search/tips' parentPath='/search' component={Tips} />
          </BrowserRouter>
        </ReactiveBase>
      </div>
    );
  }
}
