import React from 'react';
import LineGraph from 'components/line-graph';
import LatestTweets from 'components/latest-tweets';
import ListDog from 'components/lists/dog';
import ListStaff from 'components/lists/staff';
import './main.style.scss';

export default class Main extends React.Component {
  render () {
    return (
      <div id="main-page">
        <LineGraph/>
        <LatestTweets/>
        <ListStaff/>
        <ListDog/>
      </div>
    );
  }
}
