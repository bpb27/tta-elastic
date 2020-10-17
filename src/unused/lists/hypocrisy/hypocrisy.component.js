import React from 'react';
import TweetLink from 'components/tweet-link';
import NewsLink from 'components/lists/news-link';
import List from '../list';

export default class Hypocrisy extends React.Component {
  render () {
    return (
      <List header="Changing circumstances">
        <div>
          <h3>Whistleblowers</h3>
          <TweetLink id="874767922295705600">
            06/2017 - Good: <span>"Accountability and Whistleblower Protection Act is GREAT news...I look forward to signing it!"</span>
          </TweetLink>
          <TweetLink id="1178651638313226240">
            09/2019 - Bad: <span>"WHO CHANGED THE LONG STANDING WHISTLEBLOWER RULES JUST BEFORE SUBMITTAL OF THE FAKE WHISTLEBLOWER REPORT?"</span>
          </TweetLink>
          <TweetLink id="1178442759499370496">
            09/2019 - Misunderstanding: <span>"Like every American, I deserve to meet my accuser...the so-called Whistleblower"</span>
          </TweetLink>
        </div>
        <div>
          <h3>Deficits</h3>
          <TweetLink id="208624252230963200">
            01/2012 - Bad: <span>"Over $1T in annual deficit spending...The great Obama recovery."</span>
          </TweetLink>
          <NewsLink
            href="https://www.cnbc.com/2019/09/12/budget-deficit-smashes-1-trillion-mark-the-highest-in-seven-years.html"
            preText="09/2019 - Good: "
            linkText="The U.S. government’s [deficit] for fiscal 2019 swelled past the $1 trillion mark in August, the first time that level has been eclipsed in seven years"
          />
        </div>
      </List>
    );
  }
}
