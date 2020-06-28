import React from 'react';
import TweetLink from 'components/tweet-link';
import findTweet from 'utils/data';
import styles from './bad-hires.style.scss';
import imageBannon from 'assets/images/bannon.jpeg';
import imageBolton from 'assets/images/bolton.jpeg';
import imageKelly from 'assets/images/kelly.jpg';
import imagePowell from 'assets/images/powell.png';
import imageSessions from 'assets/images/sessions.jpg';
import imageTillerson from 'assets/images/tillerson.jpg';
import imageMattis from 'assets/images/mattis.jpeg';

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
          <div className={styles.image}>
            <img src={imageTillerson} alt="Tillerson and Trump"/>
          </div>
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
              'Rex Tillerson, a man who is “dumb as a rock” and totally ill prepared and ill equipped to be Secretary of State, made up a story (he got fired)',
            ]}
            tweetData={findTweet('1131537528736100352')}
          />
        </div>
        <div className={styles.person}>
          <h2>Jim Mattis <span>(Secretary of Defense I)</span></h2>
          <div className={styles.image}>
            <img src={imageMattis} alt="Mattis and Trump"/>
          </div>
          <TweetLink
            { ...props }
            tweetData={findTweet('800332639844659201')}
          />
          { this.later }
          <TweetLink
            { ...props }
            placeholderHighlights={[
              'Mattis was our Country’s most overrated General. He talked a lot, but never “brought home the bacon.” He was terrible! Someday I will tell the real story on him',
            ]}
            tweetData={findTweet('1270346144485343232')}
          />
          <TweetLink
            { ...props }
            placeholderHighlights={[
              'Lap Dog Mattis is an embarrassment to America! ',
            ]}
            tweetData={findTweet('1270346508165144576')}
          />
        </div>
        <div className={styles.person}>
          <h2>Jess Sessions <span>(Attorney General I)</span></h2>
          <div className={styles.image}>
            <img src={imageSessions} alt="Sessions and Trump"/>
          </div>
          <TweetLink
            { ...props }
            tweetData={findTweet('829496507841789952')}
          />
          { this.later }
          <TweetLink
            { ...props }
            placeholderHighlights={[
              'The recusal of Jeff Sessions was an unforced betrayal of the President of the United States',
            ]}
            tweetData={findTweet('1002027245131661312')}
          />
          <TweetLink
            { ...props }
            placeholderHighlights={[
              'Alabama, do not trust Jeff Sessions. He let our Country down.',
            ]}
            tweetData={findTweet('1263970567838932993')}
          />
        </div>
        <div className={styles.person}>
          <h2>John Kelly <span>(Chief of Staff II)</span></h2>
          <div className={styles.image}>
            <img src={imageKelly} alt="Kelly and Trump"/>
          </div>
          <TweetLink
            { ...props }
            tweetData={findTweet('891038014314598400')}
          />
          { this.later }
          <TweetLink
            { ...props }
            placeholderHighlights={[
              'I terminated John Kelly, which I couldn’t do fast enough, he knew full well that he was way over his head.',
              'Being Chief of Staff just wasn’t for him.',
              'He came in with a bang, went out with a whimper, but like so many X’s, he misses the action & just can’t keep his mouth shut',
            ]}
            tweetData={findTweet('1227986935240691712')}
          />
          <TweetLink
            { ...props }
            placeholderHighlights={[
              'Why would I tell him, he was not in my inner-circle, was totally exhausted by the job, and in the end just slinked away into obscurity',
            ]}
            tweetData={findTweet('1268683083852779520')}
          />
        </div>
        <div className={styles.person}>
          <h2>Jerome Powell <span>(Chairman of the Fed)</span></h2>
          <div className={styles.image}>
            <img src={imagePowell} alt="Powell and Trump"/>
          </div>
          <TweetLink
            { ...props }
            tweetData={findTweet('926216279287042048')}
          />
          { this.later }
          <TweetLink
            { ...props }
            placeholderHighlights={[
              'The only problem we have is Jay Powell and the Fed. He’s like a golfer who can’t putt, has no touch.',
              'don’t count on him! So far he has called it wrong, and only let us down',
            ]}
            tweetData={findTweet('1164158321265451008')}
          />
          <TweetLink
            { ...props }
            placeholderHighlights={[
              'My only question is, who is our bigger enemy, Jay Powell or Chairman Xi?',
            ]}
            tweetData={findTweet('1164914610836783104')}
          />
        </div>
        <div className={styles.person}>
          <h2>John Bolton <span>(National Security Advisor IV)</span></h2>
          <div className={styles.image}>
            <img src={imageBolton} alt="Bolton and Trump"/>
          </div>
          <TweetLink
            { ...props }
            tweetData={findTweet('984017894240604161')}
            placeholderHighlights={[
              'Feels great to have Bolton &amp, Larry K on board',
            ]}
          />
          { this.later }
          <TweetLink
            { ...props }
            tweetData={findTweet('1275375135483146241')}
            placeholderHighlights={[
              'Washed up Creepster John Bolton is a lowlife who should be in jail, money seized, for disseminating, for profit, highly Classified information.',
            ]}
          />
          <TweetLink
            { ...props }
            placeholderHighlights={[
              'Wacko John Bolton “a despicable man who failed in his duty to protect America.” Also stated that he should never be allowed to serve in government again. So true!',
              'John Bolton, who was all washed up until I brought him back and gave him a chance, broke the law by releasing Classified Information',
              'He must pay a very big price for this'
            ]}
            tweetData={findTweet('1274353051252535298')}
          />
        </div>
        <div className={styles.person}>
          <h2>Steve Bannon <span>(Chief Strategist and Campaign Manager III)</span></h2>
          <div className={styles.image}>
            <img src={imageBannon} alt="Bannon and Trump"/>
          </div>
          <TweetLink
            { ...props }
            tweetData={findTweet('898870621584596993')}
          />
          { this.later }
          <TweetLink
            { ...props }
            placeholderHighlights={[
              'Sloppy Steve Bannon, who cried when he got fired and begged for his job. Now Sloppy Steve has been dumped like a dog by almost everyone. Too bad!',
            ]}
            tweetData={findTweet('949498795074736129')}
          />
          <TweetLink
            { ...props }
            placeholderHighlights={[
              'dumped the leaker known as Sloppy Steve Bannon. Smart!',
            ]}
            tweetData={findTweet('949303089416294401')}
          />
        </div>
      </div>
    );
  }
}
