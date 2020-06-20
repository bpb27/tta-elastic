import React from 'react';
import TweetLink from 'components/tweet-link';
import findTweet from 'utils/data';
import styles from './bad-hires.style.scss';

export default class BadHires extends React.Component {
  get later () {
    return (
      <span className={styles.later}>
        some time later...
      </span>
    );
  }

  render () {
    const props = {
      className: styles.centeredTweet,
      type: 'placeholder',
    };

    return (
      <div className={styles.badHires}>
        <div className={styles.person}>
          <h2>Rex Tillerson <span>(Secretary of State I)</span></h2>
          <TweetLink
            { ...props }
            tweetData={findTweet('808638507161882624')}
          />
          { this.later }
          <TweetLink
            { ...props }
            placeholderHighlights={[
              'Rex Tillerson, didn’t have the mental capacity needed. He was dumb as a rock and I couldn’t get rid of him fast enough. He was lazy as hell.',
            ]}
            tweetData={findTweet('1071132880368132096')}
          />
          <TweetLink
            { ...props }
            placeholderHighlights={[
              'a man who is “dumb as a rock”',
              'totally ill prepared and ill equipped to be Secretary of State',
              'he got fired',
            ]}
            tweetData={findTweet('1131537528736100352')}
          />
        </div>
      </div>
    );
  }
}
