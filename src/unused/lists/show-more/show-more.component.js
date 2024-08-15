import React from 'react';
import { bool, func } from 'prop-types';
import Button from '@/button';
import styles from './show-more.style.scss';

export default class ShowMore extends React.Component {
  static propTypes = {
    handleClick: func.isRequired,
    isShowing: bool,
  };

  render() {
    return (
      <Button className={styles.showMore} onClick={this.props.handleClick}>
        Show {`${this.props.isShowing ? 'less' : 'more'}...`}
      </Button>
    );
  }
}
