import React from 'react';
import { func } from 'prop-types';
import ExternalLink from 'components/external-link';
import Icon from 'components/icon';
import styles from './tips.style.scss';

export default class Tips extends React.Component {
  static propTypes = {
    closeModal: func.isRequired,
  }

  get pipe () {
    return <span className={styles.pipe}>|</span>;
  }

  render () {
    const pipe = this.pipe;
    return (
      <div className={styles.tips}>
        <header>
          <h2>Search Tips</h2>
          <Icon name="CLOSE_BUTTON" onClick={this.props.closeModal} />
        </header>
        <main>
          <p>The search syntax has changed!</p>
          <p>TLDR: V2 matches on full words, so searching <em>los</em> will return tweets with <em>Los Angeles</em> and not tweets with <em>loser</em>, <em>closer</em>, <em>Pelosi</em>, etc.</p>
          <p>If you can't figure out how to find something, feel free to <a href="mailto:trumptwitterarchive2@gmail.com">send an email</a>.</p>
          <section>
            <span>loser</span>
            <span>tweet contains the exact word <em>loser</em></span>
          </section>
          <section>
            <span>loser*</span>
            <span>tweet contains a word that starts with <em>loser</em>, such as <em>loser</em>, <em>losers</em>, <em>loserriffic</em>, etc.</span>
          </section>
          <section>
            <span>losers + haters</span>
            <span>tweet contains the exact word <em>losers</em> AND the exact word <em>haters</em> (in any order)</span>
          </section>
          <section>
            <span>loser { pipe } haters</span>
            <span>tweet contains the exact word <em>loser</em> OR the exact word <em>haters</em></span>
          </section>
          <section>
            <span>losers -haters</span>
            <span>tweet contains the exact word <em>losers</em> AND not the exact word <em>haters</em> (in any order)</span>
          </section>
          <section>
            <span>"losers and haters"</span>
            <span>tweet contains the exact phrase <em>losers and haters</em> (use double quotes)</span>
          </section>
          <section>
            <span>"losers and haters" { pipe } "haters and losers"</span>
            <span>tweet contains the exact phrase <em>losers and haters</em> OR <em>haters and losers</em></span>
          </section>
          <section>
            <span>"losers and haters" + "my I.Q."</span>
            <span>tweet contains the exact phrase <em>losers and haters</em> AND <em>my I.Q.</em></span>
          </section>
          <section>
            <span>college* { pipe } tuition { pipe } "student debt" -electoral</span>
            <span>tweet contains a word that starts with <em>college</em> OR the exact word <em>tuition</em> OR the exact phrase <em>student debt</em> AND does not contain the exact word <em>electoral</em></span>
          </section>
          <section>
            <h6>This site uses Elastic Search. You can read some dense documentation about how to use it <ExternalLink href="https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-simple-query-string-query.html#simple-query-string-query-notes" title="View advanced search documentation on the Elastic Search website">here</ExternalLink>.</h6>
          </section>
        </main>
      </div>
    );
  }
}
