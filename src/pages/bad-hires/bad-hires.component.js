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
              'didn’t have the mental capacity needed',
              'dumb as a rock',
              'I couldn’t get rid of him fast enough',
              'He was lazy as hell',
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
        <div className={styles.person}>
          <h2>John Kelly <span>(Chief of Staff II)</span></h2>
          <TweetLink
            { ...props }
            tweetData={findTweet('891038014314598400')}
          />
          { this.later }
          <TweetLink
            { ...props }
            placeholderHighlights={[
              'I terminated John Kelly, which I couldn’t do fast enough',
              'he was way over his head',
              'Being Chief of Staff just wasn’t for him',
              'went out with a whimper',
              'just can’t keep his mouth shut',
            ]}
            tweetData={findTweet('1227986935240691712')}
          />
          <TweetLink
            { ...props }
            fullText="John Kelly didn’t know I was going to fire James Mattis, nor did he have any knowledge of my asking for a letter of resignation. Why would I tell him, he was not in my inner-circle, was totally exhausted by the job, and in the end just slinked away into obscurity. They all want to come back for a piece of the limelight!"
            placeholderHighlights={[
              'Why would I tell him, he was not in my inner-circle',
              'totally exhausted by the job',
              'just slinked away into obscurity',
            ]}
            tweetData={findTweet('1131537528736100352')}
          />
        </div>
      </div>
    );
  }
}
