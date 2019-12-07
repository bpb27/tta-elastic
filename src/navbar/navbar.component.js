import React from 'react';
import { NavLink } from 'react-router-dom';
import TextSwitch from 'components/text-switch';
import './navbar.style.scss';

export default class Navbar extends React.Component {
  render () {
    return (
      <nav className="navbar">
        <div className="left">
          <NavLink to="/" isActive={() => false}>
            <TextSwitch web="Trump Twitter Archive" mobile="TTA" />
          </NavLink>
        </div>
        <div className="right">
          <NavLink to="/" exact={true}>Home</NavLink>
          <NavLink to="/search">Search</NavLink>
          <NavLink to="/faq">FAQ</NavLink>
        </div>
      </nav>
    );
  }
}
