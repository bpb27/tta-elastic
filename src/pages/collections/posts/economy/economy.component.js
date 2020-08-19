import React from 'react';
import { Link } from 'react-router-dom';
import ExternalLink from 'components/external-link';
import GraphDebt from './debt';
import GraphDowJones from './dow-jones';
import GraphGDP from './gdp';
import GraphGDPQuarterly from './gdp-quarterly';
import GraphUnemployment from './unemployment';
import { Paragraph, Post } from 'components/pages/collections/post';
import styles from './economy.style.scss';

export default class Economy extends React.Component {
  render () {
    return (
      <Post className={styles.economy} date="August 1st, 2020" title="The Trump Economy">
        <Paragraph type="quote">
          <ExternalLink tweetId="1178067055226052609">
            "How do you impeach a President who has created the greatest Economy in the history of our Country...?"
          </ExternalLink>.
        </Paragraph>
        <GraphGDP/>
        <Paragraph>
          Trump has tweeted about creating the greatest economy in history more than <Link to='/?searchbox=%22%5C%22greatest+economy%5C%22%22'>20 times</Link>. This is inaccurate by any metric, unless he's simply stating that both real GDP and the stock market are both higher than they've ever been. Trump can reasonably claim credit for continuing upward economic trends (especially a stock market acceleration in 2017), but must also reckon with presiding over the greatest economic contraction in history.
        </Paragraph>
        <GraphGDPQuarterly/>
        <Paragraph type="quote">
          <ExternalLink href="https://www.realclearpolitics.com/video/2017/12/16/trump_were_going_to_see_economy_growth_of_4_5_and_maybe_6_percent.html" title="Real Clear Politics article 2017">
            "The economy now is at 3%. Nobody thought it would be anywhere close. I think it could go to 4, 5, and maybe even 6%..."
          </ExternalLink>.
        </Paragraph>
        <Paragraph>
          Trump presided over 2.0% to 3.3% quarterly growth, notably lower than the average growth of the Clinton years, and below the peaks of the Bush and Obama years. That said, growth was fairly steady before the 9.5% contraction this summer (the worst drop in history).
        </Paragraph>
        <GraphUnemployment/>
        <Paragraph type="quote">
          <ExternalLink tweetId="1054091502585069568">
          "Best Jobs Numbers in the history of our great Country!"
          </ExternalLink>
        </Paragraph>
        <Paragraph>
          At the beginning of 2020, unemployment was at it's lowest point since 1954. Trump presided over a 1.5% drop in unemployment, following the trend of the Obama years (which saw a 5.3% drop). Trump also presided over the highest unemployment rate in history in April 2020 (14.7%).
        </Paragraph>
        <GraphDebt/>
        <Paragraph type="quote">
          <ExternalLink href="https://www.washingtonpost.com/news/post-politics/wp/2016/04/02/transcript-donald-trump-interview-with-bob-woodward-and-robert-costa/" title="Washington Post interview 2016">
          "We’ve got to get rid of the $19 trillion in debt. I think I could do it fairly quickly...I would say over a period of eight years."
          </ExternalLink>
        </Paragraph>
        <Paragraph>
          Trump is obviously not on track to get rid of the US government debt. Even before the COVID stimulus, there was no meaningful progress made on debt reduction.
        </Paragraph>
        <Paragraph type="quote">
          <ExternalLink tweetId="136489325415243776">
            "@BarackObama has already added $5 Trillion to the national debt in less than 3 years. We must defeat him in 2012"
          </ExternalLink>
        </Paragraph>
        <Paragraph>
          Trump added $5.7 trillion to the debt in a little more than 3 years. Notably, he tweeted about debt <Link to='/?searchbox=%22debt%22&retweet=%5B%22Hide+Retweets%22%5D'>161 times</Link> during the Obama presidency, but only 16 times during his own presidency.
        </Paragraph>
        <GraphDowJones/>
        <Paragraph type="quote">
          <ExternalLink tweetId="1144533973428842496">
            "The Stock Market went up massively from the day after I won the Election, all the way up to the day that I took office, because of the enthusiasm for the fact that I was going to be President. That big Stock Market increase must be credited to me. If Hillary won - a Big Crash!"
          </ExternalLink>
        </Paragraph>
        <Paragraph>
          Trump often claims that electing Democrats would crash the stock market, despite the fact that the Obama/Biden years saw historic stock market highs. That said, he has presided over accelerated stock market increases (especially in 2017), though there have been a number of erratic and precipitous drops, including the three largest single-day drops in history.
        </Paragraph>
        <Paragraph type="conclusion">
          Trump taking credit for "the greatest economy in history" is a bit like being handed the baton at the last lap of a race with a big lead, only to stumble at the finish line because he thought the hurdles were fake news. Trump inherited upward economic trends, much like he inherited his personal fortune.
        </Paragraph>
      </Post>
    );
  }
}
