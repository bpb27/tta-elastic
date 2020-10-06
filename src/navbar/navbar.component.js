import React, { Fragment } from 'react';
import { shape, string } from 'prop-types';
import { NavLink, withRouter } from 'react-router-dom';
import styles from './navbar.style.scss';

export class Navbar extends React.Component {
  static propTypes = {
    location: shape({
      pathname: string.isRequired,
    }).isRequired,
  }

  state = {
    showInsightsMenu: false,
  }

  closeInsightMenu = () => {
    this.setState({ showInsightsMenu: false });
  }

  toggleInsightMenu = () => {
    this.setState({ showInsightsMenu: !this.state.showInsightsMenu });
  }

  get pathname () {
    return this.props.location.pathname;
  }

  render () {
    const { showInsightsMenu } = this.state;
    const active = { activeClassName: styles.active };
    const subnavClick = { onClick: this.toggleInsightMenu };
    const nonSubNavClick = { onClick: this.closeInsightMenu };

    return (
      <Fragment>
        <nav className={styles.navbar}>
          <div className={styles.left}>
            <NavLink to="/" isActive={() => false} {...nonSubNavClick}>
              <span>Trump Twitter Archive</span>
            </NavLink>
          </div>
          <div className={styles.right}>
            <button
              className={this.pathname.includes('insights') ? styles.active : ''}
              {...subnavClick}
            >
              Insights
            </button>
            <NavLink to="/faq" {...active} {...nonSubNavClick}>FAQ</NavLink>
          </div>
        </nav>
        { showInsightsMenu && (
          <div className={styles.subnav}>
            <NavLink to="/insights/frequency" {...active} {...subnavClick}>How Many Tweets</NavLink>
            <NavLink to="/insights/economy" {...active} {...subnavClick}>Economy</NavLink>
            <NavLink to="/insights/insults" {...active} {...subnavClick}>Insults</NavLink>
            {/* <NavLink to="/insights/bad-hires" {...active} {...subnavClick}>Bad Hires</NavLink>
            <NavLink to="/insights/sexual-assault" {...active} {...subnavClick}>Sexual Assault</NavLink> */}
            <div className={styles.separator}/>
            <a>More coming soon...</a>
          </div>
        )}
      </Fragment>
    );
  }
}

export default withRouter(Navbar);
