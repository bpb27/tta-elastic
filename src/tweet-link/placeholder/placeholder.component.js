import React from 'react';
import { arrayOf, bool, object, string } from 'prop-types';
import { utcTimestampToEST } from 'utils/date';
import { replaceHTMLEntities } from 'utils/format';
import Highlighter from 'react-highlight-words';
import ExternalLink from 'components/external-link';
import styles from './placeholder.style.scss';

export default class Placeholder extends React.Component {
  static propTypes = {
    className: string,
    deleted: bool,
    placeholderHighlights: arrayOf(string),
    tweetData: object.isRequired,
  }

  static defaultProps = {
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

    return (
      <div className={className}>
        {
          deleted && (
            <div className={styles.deleted}>
              <span>This tweet failed to load and might have been deleted.</span>
              <span>Click "View on Twitter" to verify.</span>
            </div>
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
