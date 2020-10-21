import React from 'react';
import { arrayOf, bool, object, oneOf, string } from 'prop-types';
import { utcTimestampToEST } from 'utils/date';
import { replaceHTMLEntities } from 'utils/format';
import Highlighter from 'react-highlight-words';
import ExternalLink from 'components/external-link';
import styles from './placeholder.style.scss';

export default class Placeholder extends React.Component {
  static propTypes = {
    alignment: oneOf(['left', 'center']),
    className: string,
    deleted: bool,
    placeholderHighlights: arrayOf(string),
    tweetData: object.isRequired,
  }

  static defaultProps = {
    alignment: 'left',
    className: '',
    placeholderHighlights: [],
  }

  render () {
    if (!this.props.tweetData) {
      return (
        <div className={className}>
          <div className={styles.placeholder}>
            Failed to render
          </div>
        </div>
      );
    }

    const {
      alignment,
      className,
      deleted,
      placeholderHighlights,
      tweetData,
    } = this.props;

    const {
      date,
      device,
      id,
      text,
    } = tweetData;

    const containerClass = `
      ${styles.container}
      ${alignment === 'left' ? styles.left : styles.center}
      ${className}
    `;

    return (
      <div className={containerClass}>
        {
          deleted && (
            <p className={styles.deleted}>
              This tweet failed to load and might have been deleted. Click "View on Twitter" to verify.
            </p>
          )
        }
        <div className={styles.placeholder}>
          <h4>Donald J. Trump</h4>
          <span className={styles.gray}>@realdonaldtrump</span>
          <p>
            <Highlighter
              autoEscape={true}
              searchWords={placeholderHighlights}
              textToHighlight={replaceHTMLEntities(text)}
            />
          </p>
          <div className={styles.gray}>
            <span>{ utcTimestampToEST(date) }</span>
            <span className={styles.dot}>·</span>
            <span>{ device }</span>
            <span className={styles.dot}>·</span>
            <span>
              <ExternalLink tweetId={id}>
                View on Twitter
              </ExternalLink>
            </span>
          </div>
        </div>
      </div>
    );
  }
}
