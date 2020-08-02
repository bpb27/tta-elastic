import React from 'react';
import { node, string } from 'prop-types';
import styles from './post.style.scss';

export default class Post extends React.Component {
  static propTypes = {
    className: string.isRequired,
    date: string.isRequired,
    children: node.isRequired,
    title: string,
  }

  static defaultProps = {
    className: '',
  }

  render () {
    return (
      <div className={`${styles.post} ${this.props.className}`}>
        <div className={styles.header}>
          <h2><span>{ this.props.date }</span> - { this.props.title }</h2>
        </div>
        <div className={styles.body}>
          { this.props.children }
        </div>
      </div>
    );
  }
}
