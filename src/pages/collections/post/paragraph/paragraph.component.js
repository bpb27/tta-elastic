import React from 'react';
import { node } from 'prop-types';
import styles from './paragraph.style.scss';

export default class Paragraph extends React.Component {
  static propTypes = {
    children: node.isRequired,
  }

  render () {
    return (
      <p className={styles.paragraph}>
        { this.props.children }
      </p>
    );
  }
}
