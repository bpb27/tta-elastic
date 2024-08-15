import React, { Fragment } from 'react';
import { string } from 'prop-types';
import styles from './text-switch.style.scss';

export default class TextSwitch extends React.Component {
  static propTypes = {
    mobile: string.isRequired,
    web: string.isRequired,
  }

  render () {
    return (
      <Fragment>
        <span className={styles.desktop}>{ this.props.web }</span>
        <span className={styles.mobile}>{ this.props.mobile }</span>
      </Fragment>
    );
  }
}
