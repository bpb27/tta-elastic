import React from 'react';
import { node, oneOf } from 'prop-types';
import styles from './paragraph.style.scss';

export default class Paragraph extends React.Component {
  static propTypes = {
    children: node.isRequired,
    type: oneOf(['conclusion', 'quote']),
  }

  get className () {
    const { type } = this.props;

    if (type === 'quote') {
      return `${styles.paragraph} ${styles.quote}`;
    } else if (type === 'conclusion') {
      return `${styles.paragraph} ${styles.conclusion}`;
    } else {
      return styles.paragraph;
    }
  }

  render () {
    return (
      <p className={this.className}>
        { this.props.children }
      </p>
    );
  }
}
