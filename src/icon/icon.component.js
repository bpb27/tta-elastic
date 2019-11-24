import React from 'react';
import { func, string } from 'prop-types';
import './icon.style.scss';

export default class Icon extends React.Component {
  static propTypes = {
    className: string,
    name: string.isRequired,
    onClick: func,
  }

  static defaultProps = {
    className: '',
  }

  get className () {
    const { className, onClick } = this.props;
    return `icon ${className} ${onClick ? 'pointer' : ''}`;
  }

  get path () {
    switch (this.props.name) {
      case 'CLOSE_BUTTON': return CLOSE_BUTTON;
      case 'DOWN_ARROW': return DOWN_ARROW;
      case 'HEART': return HEART;
      case 'RETWEET': return RETWEET;
      case 'TWITTER': return TWITTER;
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
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d={this.path}/>
        </svg>
      </div>
    );
  }
}

const CLOSE_BUTTON = 'M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 16.538l-4.592-4.548 4.546-4.587-1.416-1.403-4.545 4.589-4.588-4.543-1.405 1.405 4.593 4.552-4.547 4.592 1.405 1.405 4.555-4.596 4.591 4.55 1.403-1.416z';

const DOWN_ARROW = 'M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z';

const HEART = 'M17.516 3c2.382 0 4.487 1.564 4.487 4.712 0 4.963-6.528 8.297-10.003 11.935-3.475-3.638-10.002-6.971-10.002-11.934 0-3.055 2.008-4.713 4.487-4.713 3.18 0 4.846 3.644 5.515 5.312.667-1.666 2.333-5.312 5.516-5.312zm0-2c-2.174 0-4.346 1.062-5.516 3.419-1.17-2.357-3.342-3.419-5.515-3.419-3.403 0-6.484 2.39-6.484 6.689 0 7.27 9.903 10.938 11.999 15.311 2.096-4.373 12-8.041 12-15.311 0-4.586-3.414-6.689-6.484-6.689z';

const RETWEET = 'M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3 11v4h2.953l1.594 2h-6.547v-6h-2l3-4 3 4h-2zm6 2v-4h-2.922l-1.594-2h6.516v6h2l-3 4-3-4h2z';

const TWITTER = 'M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.5 8.778c-.441.196-.916.328-1.414.388.509-.305.898-.787 1.083-1.362-.476.282-1.003.487-1.564.597-.448-.479-1.089-.778-1.796-.778-1.59 0-2.758 1.483-2.399 3.023-2.045-.103-3.86-1.083-5.074-2.572-.645 1.106-.334 2.554.762 3.287-.403-.013-.782-.124-1.114-.308-.027 1.14.791 2.207 1.975 2.445-.346.094-.726.116-1.112.042.313.978 1.224 1.689 2.3 1.709-1.037.812-2.34 1.175-3.647 1.021 1.09.699 2.383 1.106 3.773 1.106 4.572 0 7.154-3.861 6.998-7.324.482-.346.899-.78 1.229-1.274z';

const UP_ARROW = 'M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z';
