import React from 'react';
import MetaTags from 'react-meta-tags';
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
          <Paragraph externalLinkProps={{ tweetId: '1178067055226052609' }} type="quote">
            How do you impeach a President who has created the greatest Economy in the history of our Country?
          </Paragraph>
          <GraphGDP/>
          <Paragraph>
            Trump tweeted that he's created the greatest economy in history over 20 times. Looking at economic performance under Trump and past presidents, does that statement seem accurate?
          </Paragraph>
          <GraphGDPQuarterly/>
          <Paragraph externalLinkProps={{ href: 'https://www.realclearpolitics.com/video/2017/12/16/trump_were_going_to_see_economy_growth_of_4_5_and_maybe_6_percent.html' }} type="quote">
            The economy now is at 3%. Nobody thought it would be anywhere close. I think it could go to 4, 5, and maybe even 6%.
          </Paragraph>
          <Paragraph>
            Growth averaged a little over 2% during most of Trump's presidency before the historic -9.5% contraction this summer.
          </Paragraph>
          <GraphUnemployment/>
          <Paragraph externalLinkProps={{ tweetId: '1054091502585069568' }} type="quote">
            Best Jobs Numbers in the history of our great Country!
          </Paragraph>
          <Paragraph>
            Unemployment dropped a little more than 1% during Trump's presidency before the historic 14.7% spike this summer.
          </Paragraph>
          <GraphDebt/>
          <Paragraph externalLinkProps={{ tweetId: '136489325415243776' }} type="quote">
            @BarackObama has already added $5 Trillion to the national debt in less than 3 years. We must defeat him in 2012.
          </Paragraph>
          <Paragraph>
            Debt increased dramatically under Bush, Obama, and Trump. Interestingly, Trump tweeted about the national debt 10x more during Obama's presidency than his own presidency.
          </Paragraph>
          <GraphDowJones/>
          <Paragraph externalLinkProps={{ tweetId: '1144533973428842496' }} type="quote">
            That big Stock Market increase must be credited to me. If Hillary won - a Big Crash!
          </Paragraph>
          <Paragraph>
            Trump often tweets that electing Democrats will crash the stock market, despite the fact that the market saw a 140% increase during the Obama/Biden years and big gains during the Clinton years.
          </Paragraph>
          <hr/>
          <h2>An Analogy</h2>
          <Paragraph>
            Imagine you're in a relay race.
          </Paragraph>
          <Paragraph>
            You're the last runner on the team, and your teammate Barry arrives and hands you the baton with a big lead. You lumber forward.
          </Paragraph>
          <Paragraph>
            A moment later you look back and think "I've only been running for 5 seconds and I'm already in the lead! I must be the greatest runner in history."
          </Paragraph>
          <Paragraph>
            Up ahead, you see what appear to be hurdles. "Fake news", you think to yourself.
          </Paragraph>
        </div>
      </React.Fragment>
    );
  }
}
