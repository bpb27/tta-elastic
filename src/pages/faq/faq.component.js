import React from 'react';
import ExternalLink from 'components/external-link';
import Page from 'components/page';
import { LINK_CSV, LINK_JSON, LINK_UPDATED_AT } from 'utils/constants';
import styles from './faq.style.scss';

export default class Faq extends React.Component {
  render () {
    return (
      <Page
        className={styles.page}
        tabTitle="FAQs"
        metaDescription="FAQs about the Trump Twitter Archive - downloads, data use, is a tweet real"
        metaTitle="FAQs on Trump Twitter Archive"
      >
        <h1>FAQs</h1>
        <section>
          <h3>What's happening here?</h3>
          <p>This site checks Twitter every 60 seconds and records every Trump tweet into a database. Before the site launched in 2016, all available tweets were captured and added to the database for perpetuity.</p>
        </section>
        <section>
          <h3>Can I have the data?</h3>
          <p>Yes. You can download the full dataset via Google Drive either as a <ExternalLink href={LINK_CSV} title="Open file in Google Drive">CSV file</ExternalLink> or <ExternalLink href={LINK_JSON} title="Open file in Google Drive">JSON file</ExternalLink> (last updated {LINK_UPDATED_AT}). You can credit the site however you'd like. Note that the dates are stored in UTC time.</p>
          <p>There's also an API endpoint to pull the latest 1000 tweets: <ExternalLink href="https://www.thetrumparchive.com/latest-tweets" title="Open link on thetrumparchive.com">https://www.thetrumparchive.com/latest-tweets</ExternalLink> (cached for 30 minutes).</p>
        </section>
        <section>
          <h3>Contact info?</h3>
          <p>You can email questions or requests to <a href="mailto:trumptwitterarchive2@gmail.com">trumptwitterarchive2@gmail.com</a>.</p>
        </section>
        <section>
          <h3>Is this a reputable source?</h3>
          <p>It's regularly referenced by FactCheck.org, PolitiFact, Snopes, and Wikipedia, along with almost every major news source. You can check this <ExternalLink href="https://news.google.com/search?q=%22trumptwitterarchive.com%22&hl=en-US&gl=US&ceid=US%3Aen" title="View Google News">Google News</ExternalLink> link for more.</p>
        </section>
        <section>
          <h3>Why does the old site return different search results?</h3>
          <p>The search syntax has changed! Click on the <b>Search tips</b> button to see how it works, but the TLDR is that the new site matches on full words, so searching <i>los</i> will return tweets with <i>Los Angeles</i> and not tweets with <i>loser</i>, <i>closer</i>, <i>Pelosi</i>, etc. If you can't figure out how to find something, feel free to <a href="mailto:trumptwitterarchive2@gmail.com">send an email</a>.</p>
        </section>
        <section>
          <h3>What about deleted tweets?</h3>
          <p>The site launched in September 2016. If he deleted a tweet before that, it won't be in here. If he deleted a tweet since then, it should be in here. You can filter by deleted tweets on the search page.</p>
        </section>
        <section>
          <h3>Is this certain tweet real?</h3>
          <p>If it's a post-2016 tweet and it's not in the database, it's highly probable it's fake. If it's pre-2016, you can Google the exact text to see if reputable news sites reported on it at the time.</p>
        </section>
        <section>
          <h3>Can I use your code?</h3>
          <p>For sure. The code is available on <ExternalLink href="https://github.com/bpb27/tta-elastic" title="View on Github">GitHub</ExternalLink>. With very minor tweaking, you can setup your own archive to monitor any world leader you'd like.</p>
        </section>
        <section>
          <h3>How did you scrape old tweets?</h3>
          <p>This <ExternalLink href="https://github.com/bpb27/twitter_scraping" title="View on Github">Tweet Scraper</ExternalLink> that doesn't work anymore. You can look at the code and get the gist, but not sure if this is still a viable solution (Twitter has stricter rate limiting).</p>
        </section>
        <section>
          <h3>What's the deal with time zones?</h3>
          <p>Every tweet is recorded in the database in UTC time. On the site, dates are translated to Eastern Standard Time (EST) - i.e. the time in Washington DC. No geographic data is taken into consideration, so if he tweeted something from London at 9AM it's still presented as 3AM. Daylight savings time is taken into account.</p>
        </section>
        <section>
          <h3>What's your agenda?</h3>
          <p>The aim is to provide a public resource, and Twitter doesn't really offer these features. Trump's Twitter usage is historic, as strange as that might be.</p>
        </section>
        <section>
          <h3>No ads?</h3>
          <p>Nope. No ads or tracking. A script from Twitter will load only if you're viewing a tweet spotlight, but it's loaded with a "do not track" request.</p>
        </section>
        <section>
          <h3>Who made this?</h3>
          <p>My name is Brendan, and I'm a programmer. I made this site in 2016, and didn't really think Trump would win the election or continue tweeting like this as president of the United States, but here we are.</p>
        </section>
      </Page>
    );
  }
}
