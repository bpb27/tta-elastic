import React from 'react';
import { bool, func, node, string } from 'prop-types';
import styles from './button.module.scss';

export default class Button extends React.Component {
  static propTypes = {
    className: string,
    children: node.isRequired,
    disabled: bool,
    onClick: func.isRequired,
    selected: bool,
  };

  static defaultProps = {
    className: '',
    disabled: false,
  };

  render() {
    const { children, className, disabled, onClick, selected } = this.props;
    return (
      <button
        className={`${styles.button} ${className} ${selected ? styles.selected : ''}`}
        disabled={disabled}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
}
