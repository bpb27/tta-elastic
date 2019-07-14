import React from 'react';
import LatestTweets from '../../latest-tweets';
import './main.style.scss';

export default class Main extends React.Component {
  render () {
    return (
      <div id="main-page">
        <h2>Latest tweets</h2>
        <LatestTweets />
      </div>
    );
  }
}
