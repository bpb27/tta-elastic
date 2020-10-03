import React from 'react';
import { node, object, oneOf } from 'prop-types';
import ExternalLink from 'components/external-link';
import styles from './paragraph.style.scss';

export default class Paragraph extends React.Component {
  static propTypes = {
    children: node.isRequired,
    externalLinkProps: object,
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
    const { children, externalLinkProps, type } = this.props;

    if (type === 'quote' && externalLinkProps) {
      return (
        <p className={this.className}>
          <ExternalLink {...externalLinkProps}>
            <span className={styles.quotationMark}>“</span>
              { children }
            <span className={styles.quotationMark}>”</span>
          </ExternalLink>
        </p>
      );
    } else {
      return (
        <p className={this.className}>
          { children }
        </p>
      );
    }
  }
}
