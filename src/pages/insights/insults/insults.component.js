import React from 'react';
import ExternalLink from 'components/external-link';
import Paragraph from 'components/paragraph';
import styles from './insults.style.scss';
import {
  dataCelebs,
  dataFederal,
  dataGovernors,
  dataHouse,
  dataInternational,
  dataJournalists,
  dataMayors,
  dataPolitical,
  dataSenators,
} from './insults.data';

export default class Insults extends React.Component {
  item = ({ id, insult, name }) => (
    <div className={styles.item} key={name}>
      <p>
        <span className={styles.name}>{name}</span> <ExternalLink tweetId={id}>"{ insult }"</ExternalLink>
      </p>
    </div>
  );

  render () {
    return (
      <div className={styles.page}>
        <h1>Insults as President</h1>
        <Paragraph>A sampling of insults Trump has tweeted as President of the United States, limited to one per person.</Paragraph>
        <h2>Senators</h2>
        { dataSenators.map(this.item) }
        <h2>House Reps</h2>
        { dataHouse.map(this.item) }
        <h2>Governors</h2>
        { dataGovernors.map(this.item) }
        <h2>Mayors</h2>
        { dataMayors.map(this.item) }
        <h2>Federal Officials</h2>
        { dataFederal.map(this.item) }
        <h2>Additional Political Figures</h2>
        { dataInternational.map(this.item) }
        { dataPolitical.map(this.item) }
        <h2>Journalists and Commentators</h2>
        { dataJournalists.map(this.item) }
        <h2>Celebs and Public Figures</h2>
        { dataCelebs.map(this.item) }
      </div>
    );
  }
}
