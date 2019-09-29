import React from 'react';
import { func, string } from 'prop-types';
import './icon.style.scss';

export default class Icon extends React.Component {
  static propTypes = {
    className: string,
    onClick: func,
    name: string,
  }

  static defaultProps = {
    className: '',
  }

  get className () {
    const { className, onClick } = this.props;
    return `icon ${className} ${onClick ? 'pointer' : ''}`;
  }

  get svg () {
    switch (this.props.name) {
      case 'CLOSE_BUTTON': return CLOSE_BUTTON;
      case 'DOWN_ARROW': return DOWN_ARROW;
      case 'UP_ARROW': return UP_ARROW;
      default: return null;
    }
  }

  handleClick () {
    const { onClick } = this.props;
    return onClick ? onClick() : null;
  }

  render () {
    return (
      <div className={this.className} onClick={this.handleClick.bind(this)}>
        { this.svg }
      </div>
    );
  }
}

const CLOSE_BUTTON = (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 16.538l-4.592-4.548 4.546-4.587-1.416-1.403-4.545 4.589-4.588-4.543-1.405 1.405 4.593 4.552-4.547 4.592 1.405 1.405 4.555-4.596 4.591 4.55 1.403-1.416z"/>
  </svg>
);

const DOWN_ARROW = (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/>
  </svg>
);

const UP_ARROW = (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z"/>
  </svg>
);
