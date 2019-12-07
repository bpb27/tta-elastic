import React from 'react';
import ExternalLink from 'components/external-link';
import './faq.style.scss';

export default class Faq extends React.Component {
  render () {
    return (
      <div id="faq-page">
        <h1>FAQs</h1>
        <section>
          <h3>What's going on here?</h3>
          <p>This site pings Twitter every 60 seconds and records every Trump tweet into a database, which is instantly searchable via the search page. Before the site launched in 2016, all the available tweets were grabbed and added to the database for perpituity.</p>
        </section>
        <section>
          <h3>Can I use your data?</h3>
          <p>Yes. You can credit the site if you'd like.</p>
        </section>
        <section>
          <h3>Can I use your code?</h3>
          <p>For sure. The code is available on <ExternalLink href="https://github.com/bpb27/tta-elastic">GitHub</ExternalLink>. With very minor tweaking, you can setup your own archive to monitor any world leader you'd like.</p>
        </section>
        <section>
          <h3>Is this a reputable source?</h3>
          <p>Yes? You can search Google News for "trumptwitterarchive.com", but it's been referenced by The Washington Post, The New York Times, NPR, The Atlantic, Wikipedia, Snopes, The Guardian, The Wall Street Journal, and others.</p>
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
          <h3>Can I report a bug or make a feature request?</h3>
          <p>Yes. You can email trumptwitterarchive@gmail.com. If you did this in the past and didn't get response, hopefully the site maintainers will be more responsive now.</p>
        </section>
        <section>
          <h3>Who made this site?</h3>
          <p>Brendan Brown, a guy on the internet, who is actively looking for programming assitance (React, ElasticSearch, PSQL, UI/UX, design), and any politically savvy person who has ideas on how to frame the main page or new sections. Please reach out via email at trumptwitterarchive@gmail.com.</p>
        </section>
        <section>
          <h3>What's your agenda?</h3>
          <p>The aim is to provide a public resource, since Twitter doesn't really offer these features. Trump's Twitter usage is historic and important, as strange as that might be.</p>
        </section>
        <section>
          <h3>Have you made anything else?</h3>
          <p>Yes. Use <ExternalLink href="https://www.contactingcongress.org/">Contacting Congress</ExternalLink> to find and contact your political representatives. And if you're of the "global warming is not a hoax" mindset, there's a great company called <ExternalLink href="https://www.arcadiapower.com/referral/?promo=brendan8872">Arcadia Power</ExternalLink> that let's you do something (disclaimer: I work there).</p>
        </section>
        <section>
          <h3>Shoutouts?</h3>
          <p>A certain <ExternalLink href="https://twitter.com/IgorBrigadir">@IgorBrigadir</ExternalLink> helped me find a ton of tweets that I missed right after the site launched. He's a gentleman.</p>
          <p><ExternalLink href="https://www.google.com/search?q=new+balance+dad+shoes">My dad</ExternalLink> checks the site everyday (doesn't know how to go to Twitter.com) and always lets me know when something is broken. Paternal QA.</p>
        </section>
      </div>
    );
  }
}
