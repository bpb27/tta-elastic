import React, { Fragment } from 'react';
import { number, string } from 'prop-types';
import './text-switch.style.scss';

export default class TextSwitch extends React.Component {
  static propTypes = {
    mobile: string.isRequired,
    size: number,
    web: string.isRequired,
  }

  static defaultProps = {
    size: 700,
  }

  get isMobile () {
    return window.innerWidth <= this.props.size;
  }

  render () {
    return <Fragment>{ this.isMobile ? this.props.mobile : this.props.web }</Fragment>;
  }
}
