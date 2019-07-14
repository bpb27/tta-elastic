import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.style.scss';

export default class Navbar extends React.Component {
  render () {
    return (
      <nav className="navbar">
        <div className="left">
          <NavLink to="/" isActive={() => false}>Trump Twitter Archive</NavLink>
        </div>
        <div className="right">
          <NavLink to="/" exact={true}>Home</NavLink>
          <NavLink to="/search">Search</NavLink>
          <NavLink to="/download">Download</NavLink>
          <NavLink to="/FAQ">FAQ</NavLink>
        </div>
      </nav>
    );
  }
}
