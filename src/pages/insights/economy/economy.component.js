import React from 'react';
import MetaTags from 'react-meta-tags';
import { Link } from 'react-router-dom';
import ExternalLink from 'components/external-link';
import GraphDebt from './debt';
import GraphDowJones from './dow-jones';
import GraphGDP from './gdp';
import GraphGDPQuarterly from './gdp-quarterly';
import GraphUnemployment from './unemployment';
import Paragraph from 'components/paragraph';
import styles from './economy.style.scss';

export default class Economy extends React.Component {
  render () {
    return (
      <React.Fragment>
        <MetaTags>
          <title>TTA - Trump's Economy</title>
          <meta name="description" content="Trump tweets he created the best economy in history - is that true?" />
          <meta property="og:title" content="The Trump Economy on Trump Twitter Archive" />
        </MetaTags>
        <div className={styles.page}>
          <h1>Trump's Economic Record</h1>
          <Paragraph type="quote">
            <ExternalLink tweetId="1178067055226052609">
              "How do you impeach a President who has created the greatest Economy in the history of our Country?"
            </ExternalLink>
          </Paragraph>
          <GraphGDP/>
          <Paragraph>
            Trump has tweeted that he personally created the greatest economy in history more than <Link to='/?searchbox=%22%5C%22greatest+economy%5C%22%22'>20 times</Link>.
          </Paragraph>
          <Paragraph>
            Trump has not tweeted that he inherited upward economic trends from prior administrations, that economies are relatively unrelated to presidential action, or that the greatest economic crash of all time happened on his watch.
          </Paragraph>
          <GraphGDPQuarterly/>
          <Paragraph type="quote">
            <ExternalLink href="https://www.realclearpolitics.com/video/2017/12/16/trump_were_going_to_see_economy_growth_of_4_5_and_maybe_6_percent.html" title="Real Clear Politics article 2017">
              "The economy now is at 3%. Nobody thought it would be anywhere close. I think it could go to 4, 5, and maybe even 6%."
            </ExternalLink>.
          </Paragraph>
          <Paragraph>
            This is not the best economy in history.
          </Paragraph>
          <Paragraph>
            Trump is averaging 1.5% quarterly growth, and 2.5% quarterly growth pre-Coronavirus. His best quarter came in 2018 with 3.3% growth, and his worst quarter came in 2020 with -9.5% growth (worst in history).
          </Paragraph>
          <Paragraph>
            Obama averaged 1.6% quarterly growth, and 2.3% quarterly growth post-2008 Recession. His best quarter came in 2015 with 4.1% growth, and his worst quarter came in 2009 with -3.9% growth.
          </Paragraph>
          <GraphUnemployment/>
          <Paragraph type="quote">
            <ExternalLink tweetId="1054091502585069568">
            "Best Jobs Numbers in the history of our great Country!"
            </ExternalLink>
          </Paragraph>
          <Paragraph>
            Pre-Coronavirus, unemployment was at its lowest level since 1954. Trump presided over a 1.5% drop in unemployment, following the 5.3% drop during the Obama years.
          </Paragraph>
          <Paragraph>
            Trump also presided over the highest unemployment rate in history in April 2020 at 14.7%.
          </Paragraph>
          <GraphDebt/>
          <Paragraph type="quote">
            <ExternalLink href="https://www.washingtonpost.com/news/post-politics/wp/2016/04/02/transcript-donald-trump-interview-with-bob-woodward-and-robert-costa/" title="Washington Post interview 2016">
            "We’ve got to get rid of the $19 trillion in debt. I think I could do it fairly quickly...I would say over a period of eight years."
            </ExternalLink>
          </Paragraph>
          <Paragraph>
            Trump is obviously not on track to get rid of the US government debt. Even before the COVID stimulus, there was no meaningful progress made on debt reduction. Debt has skyrocketed since the Reagan years, with the exception of the Clinton years.
          </Paragraph>
          <Paragraph type="quote">
            <ExternalLink tweetId="136489325415243776">
              "@BarackObama has already added $5 Trillion to the national debt in less than 3 years. We must defeat him in 2012"
            </ExternalLink>
          </Paragraph>
          <Paragraph>
            Trump added $5.7 trillion to the debt in a little more than 3 years. Notably, he tweeted about debt <Link to='/?searchbox=%22debt%22&retweet=%5B%22Hide+Retweets%22%5D'>161 times</Link> during the Obama presidency, but only 16 times during his own presidency. Both administrations faced unprecedented crises (Coronavirus, the Great Recession) that required massive stimulus to stave off economic collapse.
          </Paragraph>
          <GraphDowJones/>
          <Paragraph type="quote">
            <ExternalLink tweetId="1144533973428842496">
              "That big Stock Market increase must be credited to me. If Hillary won - a Big Crash!"
            </ExternalLink>
          </Paragraph>
          <Paragraph>
            Trump often claims that electing Democrats would crash the stock market, despite the fact that the Obama/Biden years saw a 140% increase. Trump has presided over accelerated stock market increases (especially in 2017), though there have been a number of erratic and precipitous drops, including the three largest single-day drops in history.
          </Paragraph>
          <Paragraph type="conclusion">
            Trump taking credit for "the greatest economy in history" is a bit like being handed the baton at the last lap of a race with a big lead, only to stumble at the finish line because you thought the hurdles were fake news. The growth was inherited, and if he intends to take credit, he must also own the decline.
          </Paragraph>
        </div>
      </React.Fragment>
    );
  }
}
