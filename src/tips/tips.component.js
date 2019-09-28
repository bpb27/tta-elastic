import React from 'react';
import { func } from 'prop-types';
import ExternalLink from '../external-link';
import './tips.style.scss';

export default class Tips extends React.Component {
  static propTypes = {
    closeModal: func.isRequired,
  }

  render () {
    return (
      <div className="tips">
        <header>
          <h2>Search Tips</h2>
          <button onClick={this.props.closeModal}>x</button>
        </header>
        <main>
          <section>
            <span>loser</span>
            <span>tweet contains the exact word <em>loser</em></span>
          </section>
          <section>
            <span>loser | losers</span>
            <span>tweet contains the exact word <em>loser</em> or the exact word <em>losers</em></span>
          </section>
          <section>
            <span>losers + haters</span>
            <span>tweet contains the exact word <em>losers</em> and the exact word <em>haters</em> in any order</span>
          </section>
          <section>
            <span>"losers and haters"</span>
            <span>tweet contains the exact phrase <em>losers and haters</em> (use double quotes for an exact phrase)</span>
          </section>
          <section>
            <span>win*</span>
            <span>tweet contains a word that starts with <em>win</em>, such as win, winner, window, winning, etc.</span>
          </section>
        </main>
        <footer>
          <h6>This site uses Elastic Search. You can read some dense documentation about how to use it <ExternalLink href="https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-simple-query-string-query.html#_simple_query_string_syntax" title="View advanced search documentation on the Elastic Search website">here</ExternalLink>.</h6>
        </footer>
      </div>
    );
  }
}
