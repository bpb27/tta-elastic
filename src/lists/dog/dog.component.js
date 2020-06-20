import React from 'react';
import findTweet from 'utils/data';
import TweetLink from 'components/tweet-link';
import List from '../list';

export default class Dog extends React.Component {
  render () {
    return (
      <List header="Dogs">
        <TweetLink tweetData={findTweet('1256702883199881216')}>
          Nicole Wallace <span>"thrown off The View like a dog"</span>
        </TweetLink>
        <TweetLink tweetData={findTweet('1255710938075889664')}>
          Brian Williams <span>"thrown off Network News like a dog"</span>
        </TweetLink>
        <TweetLink tweetData={findTweet('1159318329506574336')}>
          Tim O'Brien (biographer) <span>"fired like a dog from other jobs"</span>
        </TweetLink>
        <TweetLink tweetData={findTweet('1080124615920373760')}>
          General McChrystal <span>"fired like a dog by Obama"</span>
        </TweetLink>
        <TweetLink tweetData={findTweet('949498795074736129')}>
          Steve Bannon <span>"dumped like a dog by almost everyone"</span>
        </TweetLink>
        <TweetLink tweetData={findTweet('741590381503086592')}>
          Mitt Romney <span>"choked like a dog."</span>
        </TweetLink>
        <TweetLink tweetData={findTweet('715013260462960642')}>
          David Gregory (Meet the Press) <span>"fired like a dog!"</span>
        </TweetLink>
        <TweetLink tweetData={findTweet('710905631008546816')}>
          Erik Erickson (Red State) <span>"fired like a dog"</span>
        </TweetLink>
        <TweetLink tweetData={findTweet('702149896325890048')}>
          Ted Cruz <span>"lies like a dog-over and over"</span>
        </TweetLink>
        <TweetLink tweetData={findTweet('702141081027104769')}>
          Ted Cruz's Communication Director <span>"fired like a dog!"</span>
        </TweetLink>
        <TweetLink tweetData={findTweet('690708660377513984')}>
          Brent Bozell (National Review) <span>"begging for money like a dog"</span>
        </TweetLink>
        <TweetLink tweetData={findTweet('686327439870574592')}>
          Union Leader (newspaper) <span>"kicked out of the ABC News debate like a dog"</span>
        </TweetLink>
        <TweetLink tweetData={findTweet('677339850752806912')}>
          Glenn Beck <span>"got fired like a dog"</span>
        </TweetLink>
        <TweetLink tweetData={findTweet('620391296251916288')}>
          Chuck Todd <span>"will be fired like a dog"</span>
        </TweetLink>
        <TweetLink tweetData={findTweet('589251220000403456')}>
          George Will <span>"thrown off ABC like a dog"</span>
        </TweetLink>
        <TweetLink tweetData={findTweet('291568395621634049')}>
          Bill Maher <span>"fired like a dog...from ABC"</span>
        </TweetLink>
        <TweetLink tweetData={findTweet('258640349872926720')}>
          Kristen Stewart <span>"cheated on him like a dog"</span> (Robert Pattinson)
        </TweetLink>
        <TweetLink tweetData={findTweet('207864933373849601')}>
          Reverend Wright <span>"dumped like a dog by @BarackObama"</span>
        </TweetLink>
      </List>
    );
  }
}
