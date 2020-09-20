import React from 'react';
import ExternalLink from 'components/external-link';
import Paragraph from 'components/paragraph';
import styles from './bad-hires.style.scss';

export default class BadHires extends React.Component {
  render () {
    return (
      <div className={styles.badHires}>
        <h1>Trump's Hiring Record</h1>
        <Paragraph type="quote">
          <ExternalLink tweetId="257140638523486208">
            "I'll bet Obama goes down just like Washington because he doesn't use our (this country's) best people to win."
          </ExternalLink>
        </Paragraph>
        <Paragraph>
          Trump hired a Secretary of State who he later tweeted was <ExternalLink tweetId="1131537528736100352">"dumb as a rock and totally ill prepared and ill equipped to be Secretary of State"</ExternalLink>.
        </Paragraph>
        <Paragraph>
          Trump hired a Secretary of Defense who he later retweeted was a <ExternalLink tweetId="1270346508165144576">"an embarrassment to America"</ExternalLink>.
        </Paragraph>
        <Paragraph>
          Trump hired an Attorney General who he later tweeted was <ExternalLink tweetId="1281930300960976897">"a disaster who has let us all down"</ExternalLink>.
        </Paragraph>
        <Paragraph>
          Trump hired a National Security Advisor who he later tweeted <ExternalLink tweetId="937007006526959618">"lied to the Vice President and the FBI"</ExternalLink>.
        </Paragraph>
        <Paragraph>
          Trump hired another National Security Advisor who he later tweeted was a <ExternalLink tweetId="1275375135483146241">"washed up creepster...a lowlife who should be in jail"</ExternalLink>.
        </Paragraph>
        <Paragraph>
          Trump hired a Fed Chairman who he later tweeted might be a <ExternalLink tweetId="1164914610836783104">"bigger enemy"</ExternalLink> than China.
        </Paragraph>
        <Paragraph>
          Trump hired a Chief of Staff who he later tweeted <ExternalLink tweetId="1227986935240691712">"being Chief of Staff just wasn’t for him...came in with a bang, went out with a whimper"</ExternalLink>.
        </Paragraph>
        <Paragraph>
          Trump hired a White House Communications Director who he later tweeted was a <ExternalLink tweetId="1163440418555604998">"a highly unstable nut job"</ExternalLink>.
        </Paragraph>
        <Paragraph>
          Trump hired a Communications Director for the Office of Public Liason who he later tweeted was <ExternalLink tweetId="1167783720021123073">"disgusting and foul mouthed...despised by everyone"</ExternalLink>.
        </Paragraph>
        <Paragraph>
          Trump hired a Chief Strategist who he later tweeted <ExternalLink tweetId="949498795074736129">"cried when he got fired and begged for his job"</ExternalLink>.
        </Paragraph>
        <Paragraph>
          Trump hired a personal attorney who he later tweeted was a <ExternalLink tweetId="1104050224052396032">"bad lawyer and fraudster"</ExternalLink>.
        </Paragraph>
        <Paragraph>
          Trump hired an EPA Administrator who resigned after facing <ExternalLink href="https://en.wikipedia.org/wiki/Scott_Pruitt">14 government investigations</ExternalLink> into improper spending of department money and conflict-of-interest issues.
        </Paragraph>
        <Paragraph>
          Trump hired a Secretary of the Interior who resigned after facing <ExternalLink href="https://www.washingtonpost.com/national/health-science/interior-secretary-zinke-resigns-amid-investigations/2018/12/15/481f9104-0077-11e9-ad40-cdfd0e0dd65a_story.html">15 government investigations</ExternalLink> into improper spending of department money and conflict-of-interest issues.
        </Paragraph>
        <Paragraph>
          Trump hired a Secretary of Health and Human Services who resigned after a journalist revealed he had spent almost <ExternalLink href="https://en.wikipedia.org/wiki/Tom_Price_(American_politician)#Private_jet_scandal">a million dollars</ExternalLink> of department money on private charter flights after just a few months in office.
        </Paragraph>
        <Paragraph>
          Trump hired another Secretary of Health and Human Services who resigned after his <ExternalLink href="https://www.cnbc.com/2019/07/12/labor-secretary-alex-acosta-is-resigning-as-pressure-mounts-from-jeffrey-epstein-case.html">non-prosecution agreement</ExternalLink> with Jeffery Epstein resurfaced (the agreement allowed Epstein to avoid prison in 2007 - Epstein was later charged with sex trafficking of minors in 2019).
        </Paragraph>
      </div>
    );
  }
}
