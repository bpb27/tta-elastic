import React from 'react';
import TweetLink from '@/tweet-link';
import List from '../list';

export default class RepetitiveEndorsements extends React.Component {
  render() {
    return (
      <List header="Dogs">
        <TweetLink id="1170782374843564034">
          Dan Bishop (R) <span>"Strong on Crime, Borders, your Military and our Vets"</span>
        </TweetLink>
        <TweetLink id="1170782374843564034">
          Dan McCready (D) <span>"WEAK on Crime, Borders, and against your 2nd A"</span>
        </TweetLink>
      </List>
    );
  }
}
