import React from 'react';
import ExternalLink from 'components/external-link';
import styles from './faq.style.scss';

// TODO: Download link

export default class Faq extends React.Component {
  render () {
    return (
      <div className={styles.faq}>
        <h1>FAQs</h1>
        <section>
          <h3>What's going on here?</h3>
          <p>This site checks Twitter every 60 seconds and records every Trump tweet into a database, which is instantly searchable via the home page. Before the site launched in 2016, all the available tweets were grabbed and added to the database for perpituity.</p>
        </section>
        <section>
          <h3>Can I use your data?</h3>
          <p>Yes. You can credit the site however you'd like.</p>
        </section>
        <section>
          <h3>Can I use your code?</h3>
          <p>For sure. The code is available on <ExternalLink href="https://github.com/bpb27/tta-elastic">GitHub</ExternalLink>. With very minor tweaking, you can setup your own archive to monitor any world leader you'd like.</p>
        </section>
        <section>
          <h3>Is this a reputable source?</h3>
          <p>It's regularly referenced by FactCheck.org, PolitiFact, Snopes, and Wikipedia, along with most major news sources. You can check this <ExternalLink href="https://news.google.com/search?q=%22trumptwitterarchive.com%22&hl=en-US&gl=US&ceid=US%3Aen">Google News</ExternalLink> link for more.</p>
        </section>
        <section>
          <h3>What about deleted tweets?</h3>
          <p>The site launched in September 2016. If he deleted a tweet before that, it won't be in here. If he deleted a tweet since then, it should be in here. Tweets aren't marked as deleted (yet), but if you click on one and Twitter says it can't be found, it was deleted.</p>
        </section>
        <section>
          <h3>Is this certain tweet real?</h3>
          <p>If it's a post-2016 tweet and it's not in the database, probably not. If it's pre-2016, you can Google the exact text to see if reputable news sites reported on it at the time.</p>
        </section>
        <section>
          <h3>What's the deal with time zones?</h3>
          <p>Every tweet is recorded in the database in UTC time. You can look up what that means if you want, but on the site, it's translated to Eastern Standard Time (EST) - i.e. the time in Washington DC. No geographic data is taken into consideration, so if he tweeted something from London at 9AM it's still presented as 3AM. Daylight savings time is taken into account.</p>
        </section>
        <section>
          <h3>What's your agenda?</h3>
          <p>The aim is to provide a public resource, since Twitter doesn't really offer these features. Trump's Twitter usage is historic and important, as strange as that might be.</p>
        </section>
      </div>
    );
  }
}
