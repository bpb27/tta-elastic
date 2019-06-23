import React from 'react';
import { Link } from 'react-router-dom';
import './main.style.scss';

export default class Main extends React.Component {
  render () {
    return (
      <div id="main-page">
        <h1>Trump Twitter Archive</h1>
        <Link to="/search">Search page</Link>
      </div>
    );
  }
}
