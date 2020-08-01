import React from 'react';
import { NavLink } from 'react-router-dom';
import TextSwitch from 'components/text-switch';
import styles from './navbar.style.scss';

export default class Navbar extends React.Component {
  render () {
    const active = { activeClassName: styles.active };
    return (
      <nav className={styles.navbar}>
        <div className={styles.left}>
          <NavLink to="/" isActive={() => false}>
            <TextSwitch web="Trump Twitter Archive" mobile="TTA" />
          </NavLink>
        </div>
        <div className={styles.right}>
          <NavLink to="/collections" {...active}>Collections</NavLink>
          <NavLink to="/faq" {...active}>FAQ</NavLink>
        </div>
      </nav>
    );
  }
}
