import React from 'react';
import LatestTweets from 'components/latest-tweets';
import ListDog from 'components/lists/dog';
import ListHypocrisy from 'components/lists/hypocrisy';
import ListStaff from 'components/lists/staff';
import './main.style.scss';

export default class Main extends React.Component {
  render () {
    return (
      <div id="main-page">
        {/* <LatestTweets/> */}
        <ListHypocrisy/>
        <ListDog/>
        <ListStaff/>
      </div>
    );
  }
}
