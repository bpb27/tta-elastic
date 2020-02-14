import React from 'react';
import TweetLink from 'components/tweet-link';
import List from '../list';
import styles from './staff.style.scss';

export default class Staff extends React.Component {
  render () {
    return (
      <List className={styles.staff} header="Bad hires">
        {/* <p>On Twitter, the President of the United States publicly disparaged his own Secretary of State, Chief of Staff, Attorney General, National Security Advisor, Fed Chairman, Chief Strategist, Communications Director, and White House Counsel (all of whom he hired).</p> */}
        <div>
          <h3>Rex Tillerson (Secretary of State I)</h3>
          <TweetLink className={styles.praise} id="808638507161882624" text="I have chosen one of the truly great business leaders of the world, Rex Tillerson, Chairman and CEO of ExxonMobil, to be Secretary of State. "/>
          <TweetLink id="1131537528736100352" text="Rex Tillerson, a man who is dumb as a rock and totally ill prepared and ill equipped to be Secretary of State..."/>
          <TweetLink id="1071132880368132096" text="Rex Tillerson, didn’t have the mental capacity needed. He was dumb as a rock and I couldn’t get rid of him fast enough. He was lazy as hell."/>
        </div>
        <div>
          <h3>John Kelly (Chief of Staff II)</h3>
          <TweetLink className={styles.praise} id="891038014314598400" text="I am pleased to inform you that I have just named General/Secretary John F Kelly as White House Chief of Staff. He is a Great American..."/>
          <TweetLink id="1227986935240691712" text="When I terminated John Kelly, which I couldn’t do fast enough, he knew full well that he was way over his head. Being Chief of Staff just wasn’t for him. He came in with a bang, went out with a whimper, but like so many X’s, he misses the action & just can’t keep his mouth shut"/>
        </div>
        <div>
          <h3>Jeff Sessions (Attorney General I)</h3>
          <TweetLink className={styles.praise} id="829496507841789952" text="Congratulations to our new Attorney General, @SenatorSessions!"/>
          <TweetLink id="889790429398528000" text="Attorney General Jeff Sessions has taken a VERY weak position on Hillary Clinton crimes"/>
          <TweetLink id="890207082926022656" text="Why didn't A.G. Sessions replace Acting FBI Director Andrew McCabe"/>
          <TweetLink id="968856971075051521" text="Why is A.G. Jeff Sessions asking the Inspector General to investigate potentially massive FISA abuse...DISGRACEFUL!"/>
          <TweetLink id="1002027245131661312" text="The recusal of Jeff Sessions was an unforced betrayal of the President of the United States"/>
          <TweetLink id="1003962584352030720" text="I would have quickly picked someone else. So much time and money wasted, so many lives ruined"/>
          <TweetLink id="1030632303507243008" text="BLANK Jeff Sessions"/>
          <TweetLink id="1033332301579661312" text="he doesn’t understand what is happening underneath his command position"/>
          <TweetLink id="1074403110523678720" text="should be ashamed of himself"/>
          <TweetLink id="1104122208316612608" text="Sessions didn’t have a clue!"/>
        </div>
        <div>
          <h3>Jerome Powell (Fed Chairman I)</h3>
          <TweetLink className={styles.praise} id="926216279287042048" text="Today, it was my pleasure and great honor to announce my nomination of Jerome Powell to be the next Chairman of the @FederalReserve."/>
          <TweetLink id="1164914610836783104" text="who is our bigger enemy, Jay Powell or Chairman Xi?"/>
          <TweetLink id="1156666164732473345" text="As usual, Powell let us down"/>
          <TweetLink id="1161687635426983937" text="Jay Powell made TWO enormous mistakes"/>
          <TweetLink id="1161719409804808193" text="clueless Jay Powell"/>
          <TweetLink id="1163472272612626433" text="horrendous lack of vision by Jay Powell"/>
          <TweetLink id="1164158321265451008" text="He’s like a golfer who can’t putt, has no touch...So far he has called it wrong, and only let us down"/>
          <TweetLink id="1171735692428419072" text="the naivete of Jay Powell"/>
          <TweetLink id="1173564172635914247" text="Jay Powell & the Fed don’t have a clue."/>
          <TweetLink id="1174388901806362624" text="Jay Powell and the Federal Reserve Fail Again. No “guts,” no sense, no vision! A terrible communicator!"/>
        </div>
        <div>
          <h3>Steve Bannon (Chief Strategist)</h3>
          <TweetLink className={styles.praise} id="898870621584596993" text="I want to thank Steve Bannon for his service. He came to the campaign during my run against Crooked Hillary Clinton - it was great! Thanks S"/>
          <TweetLink id="949498795074736129" text="Sloppy Steve Bannon, who cried when he got fired and begged for his job. Now Sloppy Steve has been dumped like a dog by almost everyone. Too bad!"/>
        </div>
        <div>
          <h3>Anthony Scaramucci (Communications Director III)</h3>
          <TweetLink id="1160382091592384513" text="Anthony Scaramucci, who was quickly terminated (11 days) from a position that he was totally incapable of handling, now seems to do nothing but television..."/>
          <TweetLink id="1163440418555604998" text="Anthony Scaramucci is a highly unstable “nut job”...wheedled his way into my campaign. I barely knew him until his 11 days of gross incompetence-made a fool of himself, bad on TV. Abused staff,..."/>
        </div>
        <div>
          <h3>Michael Flynn (National Security Adviser I)</h3>
          <TweetLink id="937007006526959618" text="I had to fire General Flynn because he lied to the Vice President and the FBI. He has pled guilty to those lies."/>
        </div>
        <div>
          <h3>John Bolton (National Security Advisor IV)</h3>
          <TweetLink id="1222385653029261312" text="Why didn’t John Bolton complain about this “nonsense” a long time ago, when he was very publicly terminated"/>
          <TweetLink id="1221662397406072832" text="[Retweet] John Bolton is trying to get rich off of a lie- and leak-fueled campaign to overturn the 2016 election"/>
        </div>
        <div>
          <h3>Don McGahn (White House Counsel I)</h3>
          <TweetLink id="1127342552745762816" text="lawyer Don McGahn had a much better chance of being fired than Mueller. Never a big fan!"/>
        </div>
        <div>
          <h3>Omarosa (Director of Communications Public Liaison)</h3>
          <TweetLink className={styles.praise} id="630807186663415808" text="@OMAROSA You were fantastic on television this weekend. Thank you so much – you are a loyal friend!"/>
          <TweetLink id="1029183344397955074" text="Wacky and Deranged Omarosa..."/>
          <TweetLink id="1167783720021123073" text="Disgusting and foul mouthed Omarosa...I gave her every break, despite the fact that she was despised by everyone..."/>
          <TweetLink id="1028996374174593025" text="She begged me for a job, tears in her eyes, I said Ok. People in the White House hated her. She was vicious, but not smart."/>
          <TweetLink id="1029329583672307712" text="When you give a crazed, crying lowlife a break, and give her a job at the White House, I guess it just didn’t work out. Good work by General Kelly for quickly firing that dog!"/>
        </div>
        <div>
          <h3>Sean Spicer (Press Secretary I)</h3>
          <TweetLink className={styles.praise} id="1194065765273653249" text="Vote for Sean Spicer on Dancing with the Stars."/>
        </div>
      </List>
    );
  }
}
