import React from 'react';
import List from '../list';
import Button from 'components/button';
import ExternalLink from 'components/external-link';
import styles from './bad-hires.style.scss';

export default class BadHires extends React.Component {
  state = {
    showMore: false,
  }

  render () {
    const { showMore } = this.state;
    return (
      <List className={styles.badHires} header="Bad Hires">
        <div className={styles.list}>
          <div>Trump picked a...</div>
          <div>Secretary of State who was <ExternalLink tweetId="1071132880368132096">"dumb as a rock"</ExternalLink></div>
          <div>Secretary of Defense who was <ExternalLink tweetId="1270346508165144576">"an embarrassment to America"</ExternalLink></div>
          <div>Chief of Staff who <ExternalLink tweetId="1227986935240691712">"came in with a bang, went out with a wimper"</ExternalLink></div>
          <div>Attorney General who was <ExternalLink tweetId="1281930300960976897">"a disaster who has let us all down"</ExternalLink></div>
          <div>Fed Chairman who might be a <ExternalLink tweetId="1164914610836783104">"bigger enemy"</ExternalLink> than China</div>
          <div>National Security Advisor who was a <ExternalLink tweetId="1275375135483146241">"washed up creepster"</ExternalLink></div>
          <div>Chief Strategist who was <ExternalLink tweetId="949303089416294401">"the leaker known as Sloppy Steve"</ExternalLink></div>
          <div>Communications Director who was a <ExternalLink tweetId="1163440418555604998">"highly unstable nutjob"</ExternalLink></div>
          <div>Communications Director of OPL who was a <ExternalLink tweetId="1167783720021123073">"despised by everyone"</ExternalLink></div>

        </div>
        {
          !showMore && (
            <Button onClick={() => this.setState({ showMore: true })}>
              Show more...
            </Button>
          )
        }
        {
          showMore && (
          <div className={styles.more}>
            <p>
              He tweeted that his first Secretary of State Rex Tillerson was <ExternalLink tweetId="1071132880368132096">"dumb as a rock"</ExternalLink>, <ExternalLink tweetId="1071132880368132096">"lazy as hell"</ExternalLink>, <ExternalLink tweetId="1071132880368132096">"didn’t have the mental capacity needed"</ExternalLink> and <ExternalLink tweetId="1131537528736100352">"totally ill prepared and ill equipped to be Secretary of State"</ExternalLink>. He also tweeted <ExternalLink tweetId="1071132880368132096">"I couldn’t get rid of him fast enough".</ExternalLink>
            </p>
            <p>
              He tweeted that his first Secretary of Defense General Jim Mattis <ExternalLink tweetId="1270346144485343232">"was our Country’s most overrated General"</ExternalLink>, that <ExternalLink tweetId="1270346144485343232"> "he talked a lot, but never brought home the bacon"</ExternalLink>, that <ExternalLink tweetId="1270346144485343232">"he was terrible"</ExternalLink>, and retweeted that <ExternalLink tweetId="1270346508165144576">"Lap Dog Mattis is an embarrassment to America!"</ExternalLink>.
            </p>
            <p>
              He tweeted that his second Chief of Staff General John Kelly <ExternalLink tweetId="1268683083852779520">"was not in my inner-circle, was totally exhausted by the job, and in the end just slinked away into obscurity"</ExternalLink>. He later tweeted the anecdote <ExternalLink tweetId="1227986935240691712">"I terminated John Kelly, which I couldn’t do fast enough, he knew full well that he was way over his head. Being Chief of Staff just wasn’t for him. He came in with a bang, went out with a whimper"</ExternalLink>.
            </p>
            <p>
              He tweeted that his first Attorney General Jeff Sessions <ExternalLink tweetId="1281930300960976897">"is a disaster who has let us all down"</ExternalLink>, that <ExternalLink tweetId="1104122208316612608">"Sessions didn’t have a clue!"</ExternalLink> and <ExternalLink tweetId="1268132011203575811">"was played like a drum!"</ExternalLink>. He also tweeted that <ExternalLink tweetId="1074403110523678720">"Jeff Sessions should be ashamed of himself"</ExternalLink>, that <ExternalLink tweetId="1002027245131661312">"the recusal of Jeff Sessions was an unforced betrayal of the President of the United States."</ExternalLink>, noting <ExternalLink tweetId="1003962584352030720">"I would have quickly picked someone else"</ExternalLink>. Finally, he tweeted a warning, <ExternalLink tweetId="1263970567838932993">"Alabama, do not trust Jeff Sessions...he let our Country down"</ExternalLink>.
            </p>
            <p>
              He tweeted that his first Chair of the Federal Reserve Jerome Powell has <ExternalLink tweetId="1174388901806362624">"no guts, no sense, no vision! A terrible communicator!"</ExternalLink>, that <ExternalLink tweetId="1189914333842681858">"people are VERY disappointed in Jay Powell"</ExternalLink>, presumably because the <ExternalLink tweetId="1234728725574561792">"Jerome Powell led Federal Reserve has called it wrong from day one. Sad!"</ExternalLink>. He further tweeted about the <ExternalLink tweetId="1163472272612626433">"horrendous lack of vision by Jay Powell"</ExternalLink>, warning <ExternalLink tweetId="1164158321265451008">"don’t count on him! So far he has called it wrong, and only let us down...."</ExternalLink>, and ominously pondering <ExternalLink tweetId="1164914610836783104">"...My only question is, who is our bigger enemy, Jay Powell or Chairman Xi?"</ExternalLink>.
            </p>
            <p>
              He tweeted about his fourth National Security Advisor John Bolton, saying <ExternalLink tweetId="1275375135483146241">"Washed up Creepster John Bolton is a lowlife who should be in jail, money seized"</ExternalLink>, adding that he is <ExternalLink tweetId="1284255472229519360">"a war mongering fool"</ExternalLink>, <ExternalLink tweetId="1275287274213777413">"is really dumb"</ExternalLink>, and <ExternalLink tweetId="1274366497360613381">"likes dropping bombs on people, and killing them"</ExternalLink>. He further explained that <ExternalLink tweetId="1275044483047055366">"I gave John Bolton, who was incapable of being Senate confirmed because he was considered a wacko, and was not liked, a chance...He turned out to be grossly incompetent, and a liar"</ExternalLink>. He regretfully added that <ExternalLink tweetId="1273620783131250690">"early on, I should have fired him right then & there!"</ExternalLink>, especially considering that <ExternalLink tweetId="1273468951838838785">"President Bush fired him also. Bolton is incompetent!"</ExternalLink>.
            </p>
            <p>
              He tweeted that his fourth White House Communications Directory Anthony Scaramucci <ExternalLink tweetId="1160382091592384513">"was quickly terminated (11 days) from a position that he was totally incapable of handling"</ExternalLink>, further explaining that he <ExternalLink tweetId="1163440418555604998">"is a highly unstable nut job who...unfortunately wheedled his way into my campaign. I barely knew him until his 11 days of gross incompetence-made a fool of himself, bad on TV. Abused staff, got fired...He was a mental wreck. We didn’t want him around."</ExternalLink>.
            </p>
            <p>
              He tweeted that his first Chief Strategist and former Campaign Manager Steve Bannon <ExternalLink tweetId="949498795074736129">"cried when he got fired and begged for his job"</ExternalLink>. He tweeted his pleasure that a group <ExternalLink tweetId="949303089416294401">"dumped the leaker known as Sloppy Steve Bannon. Smart!""</ExternalLink>, further adding that <ExternalLink tweetId="949498795074736129">"Sloppy Steve has been dumped like a dog by almost everyone. Too bad!"</ExternalLink>.
            </p>
            <p>
              He tweeted that his Director of Communications for the Office of Public Liaison Omarosa Manigault was <ExternalLink tweetId="1167783720021123073">"disgusting and foul mouthed...despised by everyone"</ExternalLink>. He further explained that <ExternalLink tweetId="1029185314752000007">"wacky Omarosa, who got fired 3 times on the Apprentice, now got fired for the last time. She never made it, never will. She begged me for a job, tears in her eyes, I said Ok. People in the White House hated her. She was vicious, but not smart..."</ExternalLink>.
            </p>
          </div>
        )}
      </List>
    );
  }
}
