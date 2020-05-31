import React from 'react';
import TweetLink from 'components/tweet-link';
import List from '../list';

export default class Dog extends React.Component {
  render () {
    return (
      <List header="Dogs">
        <TweetLink id="1256702883199881216">
          Nicole Wallace <span>"thrown off The View like a dog"</span>
        </TweetLink>
        <TweetLink id="1255710938075889664">
          Brian Williams <span>"thrown off Network News like a dog"</span>
        </TweetLink>
        <TweetLink id="1159318329506574336">
          Tim O'Brien (biographer) <span>"fired like a dog from other jobs"</span>
        </TweetLink>
        <TweetLink id="1080124615920373760">
          General McChrystal <span>"fired like a dog by Obama"</span>
        </TweetLink>
        <TweetLink id="949498795074736129">
          Steve Bannon <span>"dumped like a dog by almost everyone"</span>
        </TweetLink>
        <TweetLink id="741590381503086592">
          Mitt Romney <span>"choked like a dog."</span>
        </TweetLink>
        <TweetLink id="715013260462960642">
          David Gregory (Meet the Press) <span>"fired like a dog!"</span>
        </TweetLink>
        <TweetLink id="710905631008546816">
          Erik Erickson (Red State) <span>"fired like a dog"</span>
        </TweetLink>
        <TweetLink id="702149896325890048">
          Ted Cruz <span>"lies like a dog-over and over"</span>
        </TweetLink>
        <TweetLink id="702141081027104769">
          Ted Cruz's Communication Director <span>"fired like a dog!"</span>
        </TweetLink>
        <TweetLink id="690708660377513984">
          Brent Bozell (National Review) <span>"begging for money like a dog"</span>
        </TweetLink>
        <TweetLink id="686327439870574592">
          Union Leader (newspaper) <span>"kicked out of the ABC News debate like a dog"</span>
        </TweetLink>
        <TweetLink id="677339850752806912">
          Glenn Beck <span>"got fired like a dog"</span>
        </TweetLink>
        <TweetLink id="620391296251916288">
          Chuck Todd <span>"will be fired like a dog"</span>
        </TweetLink>
        <TweetLink id="589251220000403456">
          George Will <span>"thrown off ABC like a dog"</span>
        </TweetLink>
        <TweetLink id="291568395621634049">
          Bill Maher <span>"fired like a dog...from ABC"</span>
        </TweetLink>
        <TweetLink id="258640349872926720">
          Kristen Stewart <span>"cheated on him like a dog"</span> (Robert Pattinson)
        </TweetLink>
        <TweetLink id="207864933373849601">
          Reverend Wright <span>"dumped like a dog by @BarackObama"</span>
        </TweetLink>
      </List>
    );
  }
}
