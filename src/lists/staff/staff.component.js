import React from 'react';
import TweetLink from 'components/tweet-link';
import List from '../list';
import styles from './staff.style.scss';

/*
Gary Cohn
*/

/* eslint-disable */

const StaffPerson = ({ header, insults, praiseId, time }) => (
  <div>
    <h3>{ header }</h3>
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <TweetLink id={praiseId} showEmbedded={true} />
      </div>
      <div className={styles.right}>
        <h5>{time} months later, he begins to tweet...</h5>
        { insults }
      </div>
    </div>
  </div>
);

export default class Staff extends React.Component {
  render () {
    return (
      <List className={styles.staff} header="Bad hires">
        <p>On Twitter, the President of the United States publicly disparaged his own Secretary of State, Chief of Staff, Attorney General, National Security Advisor, Fed Chairman, Chief Strategist, Communications Director, and White House Counsel (all of whom he hired).</p>
        <StaffPerson
          header="Rex Tillerson (Secretary of State I)"
          praiseId="808638507161882624"
          time="24"
          insults={[
            <>
              <TweetLink id="1071132880368132096">
                Rex Tillerson was <span>"dumb as a rock"</span>
              </TweetLink>
              <TweetLink id="1131537528736100352">
                Rex Tillerson was <span>"totally ill prepared and ill equipped to be Secretary of State"</span>
              </TweetLink>
              <TweetLink id="1071132880368132096">
                Rex Tillerson <span>"didn’t have the mental capacity needed"</span>
              </TweetLink>
              <TweetLink id="1071132880368132096">
                Rex Tillerson was <span>"lazy as hell"</span>
              </TweetLink>
              <TweetLink id="1131537528736100352">
                Rex Tillerson is <span>"a man who is dumb as a rock"</span>
              </TweetLink>
              <TweetLink id="1071132880368132096">
                Rex Tillerson: <span>"I couldn’t get rid of him fast enough"</span>
              </TweetLink>
            </>
          ]}
        />
        <StaffPerson
          header="John Kelly (Chief of Staff II)"
          praiseId="891038014314598400"
          time="30"
          insults={[
            <>
              <TweetLink id="1227986935240691712">
                John Kelly was <span>"way over his head"</span>
              </TweetLink>
              <TweetLink id="1227986935240691712">
                John Kelly <span>"went out with a whimper"</span>
              </TweetLink>
              <TweetLink id="1227986935240691712">
                John Kelly: <span>"being Chief of Staff just wasn’t for him"</span>
              </TweetLink>
              <TweetLink id="1227986935240691712">
                John Kelly: <span>"I terminated John Kelly"</span>
              </TweetLink>
              <TweetLink id="1227986935240691712">
                John Kelly <span>"just can’t keep his mouth shut"</span>
              </TweetLink>
            </>
          ]}
        />
        <StaffPerson
          header="Jeff Sessions (Attorney General I)"
          praiseId="829496507841789952"
          time="6"
          insults={[
            <>
              <TweetLink id="1033332301579661312">
                Jess Sessions <span>"doesn’t understand what is happening underneath his command"</span>
              </TweetLink>
              <TweetLink id="889790429398528000">
                Jess Sessions has <span>"taken a VERY weak position on Hillary Clinton crimes"</span>
              </TweetLink>
              <TweetLink id="1002027245131661312">
                Jess Sessions caused <span>"an unforced betrayal of the President of the United States"</span>
              </TweetLink>
              <TweetLink id="1030632303507243008">
                Jess Sessions is <span>"BLANK"</span>
              </TweetLink>
              <TweetLink id="968856971075051521">
                Jess Sessions is <span>"DISGRACEFUL!"</span>
              </TweetLink>
              <TweetLink id="1104122208316612608">
                Jess Sessions <span>"didn’t have a clue!"</span>
              </TweetLink>
              <TweetLink id="1074403110523678720">
                Jess Sessions <span>"should be ashamed of himself"</span>
              </TweetLink>
              <TweetLink id="1263970567838932993">
                Alabama: <span>"do not trust Jeff Sessions"</span>
              </TweetLink>
            </>
          ]}
        />
        <StaffPerson
          header="Jay Powell (Fed Chairman I)"
          praiseId="926216279287042048"
          time="16"
          insults={[
            <>
              <TweetLink id="1163472272612626433">
                Jay Powell has <span>"horrendous lack of vision"</span>
              </TweetLink>
              <TweetLink id="1161687635426983937">
                Jay Powell <span>"made TWO enormous mistakes"</span>
              </TweetLink>
              <TweetLink id="1173564172635914247">
                Jay Powell doesn't <span>"have a clue."</span>
              </TweetLink>
              <TweetLink id="1161719409804808193">
                Jay Powell is <span>"clueless"</span>
              </TweetLink>
              <TweetLink id="1174388901806362624">
                Jay Powell is <span>"a terrible communicator!"</span>
              </TweetLink>
              <TweetLink id="1174388901806362624">
                Jay Powell has: <span>"no guts, no sense, no vision!"</span>
              </TweetLink>
              <TweetLink id="1164158321265451008">
                Jay Powell has <span>"called it wrong, and only let us down"</span>
              </TweetLink>
              <TweetLink id="1164914610836783104">
                Jay Powell: <span>"who is our bigger enemy, Jay Powell or Chairman Xi?"</span>
              </TweetLink>
            </>
          ]}
        />
        <StaffPerson
          header="Steve Bannon (Chief Strategist and Campaign Manager III)"
          praiseId="898870621584596993"
          time="4"
          insults={[
            <>
              <TweetLink id="949303089416294401">
                Steve Bannon, aka <span>"Sloppy Steve Bannon"</span>
              </TweetLink>
              <TweetLink id="949498795074736129">
                Steve Bannon <span>"cried when he got fired and begged for his job"</span>
              </TweetLink>
              <TweetLink id="949498795074736129">
                Steve Bannon <span>"has been dumped like a dog by almost everyone"</span>
              </TweetLink>
            </>
          ]}
        />
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
          <h3>Michael Cohen (Personal Counsel)</h3>
          <TweetLink id="1104050224052396032" text="Bad lawyer and fraudster Michael Cohen said under sworn testimony that he never asked for a Pardon...He lied! Additionally, he directly asked me for a pardon. I said NO. He lied again! He also badly wanted to work at the White House. He lied!"/>
          <TweetLink id="1069613383622803456" text="You mean he can do all of the TERRIBLE, unrelated to Trump, things having to do with fraud, big loans, Taxis, etc., and not serve a long prison term?"/>
          <TweetLink id="1073207272069890049" text="Cohen was guilty on many charges unrelated to me"/>
          <TweetLink id="1032247043992023040" text="If anyone is looking for a good lawyer, I would strongly suggest that you don’t retain the services of Michael Cohen!"/>
        </div>
        <div>
          <h3>Paul Manafort (2016 Campaign Manager II)</h3>
          <TweetLink id="1003268646070874113" text="Paul Manafort came into the campaign very late and was with us for a short period of time...should have been told that Comey and the boys were doing a number on him, and he wouldn’t have been hired!"/>
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
