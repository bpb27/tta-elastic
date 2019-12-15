import React from 'react';
import { bool, func, string } from 'prop-types';
import styles from './checkbox.style.scss';

export default class Checkbox extends React.Component {
  static propTypes = {
    label: string.isRequired,
    name: string.isRequired,
    onClick: func.isRequired,
    value: bool.isRequired,
  }

  render () {
    const { label, name, onClick, value } = this.props;
    return (
      <span className={styles.checkbox} onClick={() => onClick(!value)}>
        <input checked={value} name={name} readOnly={true} type="checkbox" />
        <label>{ label }</label>
      </span>
    );
  }
}
