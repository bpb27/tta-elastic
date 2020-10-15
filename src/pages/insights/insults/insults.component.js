import React from 'react';
import ExternalLink from 'components/external-link';
import Page from 'components/page';
import Paragraph from 'components/paragraph';
import styles from './insults.style.scss';
import {
  dataCelebs,
  dataFederal,
  dataGovernors,
  dataHires,
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
      <Page
        className={styles.page}
        tabTitle="Insults"
        metaDescription="The hundreds of people Trump has insulted as president"
        metaTitle="Insults on Trump Twitter Archive"
      >
        <h1>Insults as President</h1>
        <Paragraph>A sampling of insults Trump has tweeted as President of the United States, limited to one per person.</Paragraph>
        <div className={styles.lists}>
          <h2>Bad Hires</h2>
          { dataHires.map(this.item) }
          <h2>Federal Officials</h2>
          { dataFederal.map(this.item) }
          <h2>Senators</h2>
          { dataSenators.map(this.item) }
          <h2>House Reps</h2>
          { dataHouse.map(this.item) }
          <h2>Governors</h2>
          { dataGovernors.map(this.item) }
          <h2>Mayors</h2>
          { dataMayors.map(this.item) }
          <h2>Additional Political Figures</h2>
          { dataInternational.map(this.item) }
          { dataPolitical.map(this.item) }
          <h2>Journalists and Commentators</h2>
          { dataJournalists.map(this.item) }
          <h2>Celebs and Public Figures</h2>
          { dataCelebs.map(this.item) }
        </div>
        <hr/>
        <h2>Editorial Questions</h2>
        <Paragraph>
          How presidential, moral, and productive is it to publicly degrade governors, mayors, senators, representatives, federal officials, and allies he's supposed to be working with to move the country forward?
        </Paragraph>
        <Paragraph>
          What are the cost to our society to have the President of the United States regularly belittling everyone in sight?
        </Paragraph>
      </Page>
    );
  }
}
