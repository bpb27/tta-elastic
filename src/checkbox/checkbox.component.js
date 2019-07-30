import React from 'react';
import { bool, func, string } from 'prop-types';
import './checkbox.style.scss';

export default class Checkbox extends React.Component {
  static propTypes = {
    label: string.isRequired,
    onClick: func.isRequired,
    value: bool.isRequired,
  }

  render () {
    return (
      <span className="checkbox" onClick={() => this.props.onClick(!this.props.value)}>
        <input checked={this.props.value} readOnly={true} type="checkbox" />
        <label>{ this.props.label }</label>
      </span>
    );
  }
}
