import React, { Fragment } from 'react';
import { shape, string } from 'prop-types';
import { NavLink, withRouter } from 'react-router-dom';
import styles from './navbar.module.scss';

export class Navbar extends React.Component {
  static propTypes = {
    location: shape({
      pathname: string.isRequired,
    }).isRequired,
  };

  state = {
    showInsightsMenu: false,
  };

  closeInsightMenu = () => {
    this.setState({ showInsightsMenu: false });
  };

  toggleInsightMenu = () => {
    this.setState({ showInsightsMenu: !this.state.showInsightsMenu });
  };

  get pathname() {
    return this.props.location.pathname;
  }

  render() {
    const { showInsightsMenu } = this.state;
    const active = { activeClassName: styles.active };
    const subnavClick = { onClick: this.toggleInsightMenu };

    return (
      <Fragment>
        <nav className={styles.navbar}>
          <div className={styles.left}>
            <NavLink
              to="/"
              isActive={() => false}
              onClick={() => {
                this.closeInsightMenu();
                window.scrollTo(0, 0);
              }}
            >
              Trump Twitter Archive <span className={styles.gray}>V2</span>
            </NavLink>
          </div>
          <div className={styles.right}>
            <div className={styles.desktop}>
              <button
                className={this.pathname.includes('insights') ? styles.active : ''}
                {...subnavClick}
              >
                Insights
              </button>
              <NavLink {...active} onClick={this.closeInsightMenu} to="/faq">
                FAQ
              </NavLink>
            </div>
            <div className={`${styles.hamburger} ${styles.mobile}`} {...subnavClick}>
              <div />
              <div />
              <div />
            </div>
          </div>
        </nav>
        {showInsightsMenu && (
          <div className={styles.subnav}>
            <NavLink to="/insights/frequency" {...active} {...subnavClick}>
              How Many Tweets
            </NavLink>
            <NavLink to="/insights/insults" {...active} {...subnavClick}>
              Insults
            </NavLink>
            <NavLink to="/insights/past" {...active} {...subnavClick}>
              Pre-Presidency
            </NavLink>
          </div>
        )}
      </Fragment>
    );
  }
}

export default withRouter(Navbar);
