import React from 'react';
import { node, string } from 'prop-types';
import Button from '@/button';
import styles from './embedded-tweet-column.style.scss';

export default class EmbeddedTweetColumn extends React.Component {
  static propTypes = {
    children: node.isRequired,
    header: string,
  };

  render() {
    const { children, header } = this.props;
    return (
      <div className={styles.embeddedTweetColumn}>
        {header && <h1>{header}</h1>}
        <div className={styles.list}>
          {children}
          <Button onClick={() => window.scrollTo(0, 0)}>Back to top</Button>
        </div>
      </div>
    );
  }
}
