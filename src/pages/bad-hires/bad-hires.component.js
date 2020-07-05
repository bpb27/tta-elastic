import React, { Fragment } from 'react';
import ExternalLink from 'components/external-link';
import TweetLink from 'components/tweet-link';
import findTweet from 'utils/data';
import styles from './bad-hires.style.scss';
import data from './bad-hires.data';

export default class BadHires extends React.Component {
  person = ({ altText, image, name, title, tweets }) => {
    return (
      <div className={styles.person} key={name}>
        <h2>{ name } <span>({ title })</span></h2>
        <div className={styles.image}>
          <img src={image} alt={altText}/>
        </div>
        {
          tweets.map(({ highlights, id, praise }) => (
            <Fragment key={id}>
              <TweetLink
                className={styles.centeredTweet}

                placeholderHighlights={highlights}
                tweetData={findTweet(id)}
                type="placeholder"
              />
              { praise && (
                <span className={styles.later}>
                  some time later...
                </span>
              )}
            </Fragment>
          ))
        }
      </div>
    );
  }

  render () {
    return (
      <div className={styles.badHires}>
        <p className={styles.tldr}>
          He tweeted that his first Secretary of State Rex Tillerson was <ExternalLink tweetId="1071132880368132096">"dumb as a rock"</ExternalLink>, <ExternalLink tweetId="1071132880368132096">"lazy as hell"</ExternalLink>, <ExternalLink tweetId="1071132880368132096">"didn’t have the mental capacity needed"</ExternalLink>and <ExternalLink tweetId="1131537528736100352">"totally ill prepared and ill equipped to be Secretary of State"</ExternalLink>. He also tweeted <ExternalLink tweetId="1071132880368132096">"I couldn’t get rid of him fast enough".</ExternalLink>
        </p>
        <p className={styles.tldr}>
          He tweeted that his first Secretary of Defense Jim Mattis <ExternalLink tweetId="1270346144485343232">"was our Country’s most overrated General"</ExternalLink>, that <ExternalLink tweetId="1270346144485343232"> "he talked a lot, but never brought home the bacon"</ExternalLink>, that <ExternalLink tweetId="1270346144485343232">"he was terrible"</ExternalLink>, and retweeted that <ExternalLink tweetId="1270346508165144576">"Lap Dog Mattis is an embarrassment to America!"</ExternalLink>.
        </p>
        { data.map(this.person)}
      </div>
    );
  }
}
