import React, { Fragment } from 'react';
import { shape, string } from 'prop-types';
import { NavLink, withRouter } from 'react-router-dom';
import TextSwitch from 'components/text-switch';
import styles from './navbar.style.scss';

export class Navbar extends React.Component {
  static propTypes = {
    location: shape({
      pathname: string.isRequired,
    }).isRequired,
  }

  render () {
    const active = { activeClassName: styles.active };
    return (
      <Fragment>
        <nav className={styles.navbar}>
          <div className={styles.left}>
            <NavLink to="/" isActive={() => false}>
              <TextSwitch web="Trump Twitter Archive" mobile="TTA" />
            </NavLink>
          </div>
          <div className={styles.right}>
            <NavLink to="/insights" {...active}>Insights</NavLink>
            <NavLink to="/faq" {...active}>FAQ</NavLink>
          </div>
        </nav>
        { this.props.location.pathname.includes('/insights') && (
          <div className={styles.subnav}>
            <NavLink to="/insights/frequency" {...active}>Frequency</NavLink>
            <NavLink to="/insights/bad-hires" {...active}>Bad Hires</NavLink>
            <NavLink to="/insights/economy" {...active}>Economy</NavLink>
            <NavLink to="/insights/sexual-assault" {...active}>Sexual Assault</NavLink>
          </div>
        )}
      </Fragment>
    );
  }
}

export default withRouter(Navbar);
