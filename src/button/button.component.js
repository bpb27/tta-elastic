import React from 'react';
import { bool, func, node, string } from 'prop-types';
import styles from './button.style.scss';

export default class Button extends React.Component {
  static propTypes = {
    className: string,
    children: node.isRequired,
    disabled: bool,
    onClick: func.isRequired,
  }

  static defaultProps = {
    className: '',
    disabled: false,
  }

  render () {
    const { children, className, disabled, onClick } = this.props;
    return (
      <button className={`${styles.button} ${className}`} disabled={disabled} onClick={onClick}>
        { children }
      </button>
    );
  }
}
