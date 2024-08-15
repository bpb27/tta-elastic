import React from 'react';
import MetaTags from 'react-meta-tags';
import ExternalLink from '@/external-link';
import Paragraph from '@/paragraph';
import styles from './sexual-assault.style.scss';

const thing = [
  {
    name: 'Ivana Trump (ex-wife)',
    quote:
      'Their house in 1990: He yanked out her hair, held her hands back, tore off her clothes, "he raped me".',
    source:
      'http://nymag.com/intelligencer/2017/12/what-happened-to-trumps-16-sexual-misconduct-accusers.html',
  },
  {
    name: 'Kristin Anderson',
    quote:
      'A nightclub in the 1990s: She did\'t notice the figure to her right on a red velvet couch until his fingers slid under her miniskirt, moved up her inner thigh and touched her vagina. She fled. "It’s a sexual assault issue."',
    source:
      'https://www.washingtonpost.com/politics/woman-says-trump-reached-under-her-skirt-and-groped-her-in-early-1990s/2016/10/14/67e8ff5e-917d-11e6-a6a3-d50061aa9fae_story.html',
  },
  {
    name: 'Jill Harth',
    quote:
      'A business meeting at Mar-a-Lago in the 1993: "I was admiring the decoration, and next thing I know he’s pushing me against a wall and has his hands all over me." She ran out of the room.',
    source: 'https://www.nytimes.com/2016/10/09/opinion/sunday/donald-trump-groper-in-chief.html',
  },
  {
    name: 'Temple Taggart',
    quote:
      'A beauty pageant in 1997: "He kissed me directly on the lips. I thought, oh my God, gross...There were a few other girls...wow, that’s inappropriate".',
    source: 'https://www.nytimes.com/2016/05/15/us/politics/donald-trump-women.html',
  },
  {
    name: 'Cathy Heller',
    quote:
      'A Mother\'s Day brunch at Mar-a-Lago in 1997: "He took my hand, and grabbed me, and went for the lips...He was strong...I was angry and shaken."',
    source:
      'https://www.theguardian.com/us-news/2016/oct/15/donald-trump-sexual-misconduct-allegations-cathy-heller',
  },
  {
    name: 'Karena Virginia',
    quote:
      "The US Open in 1998: He said look at her legs, approached her, wrapped his arm around her, then reached down to her breast, saying don't you know who I am?",
    source:
      'https://www.washingtonpost.com/politics/woman-says-trump-groped-her-while-attending-us-open-tennis-tourney-in-1998/2016/10/20/a1b6caf8-956b-11e6-bb29-bf2701dbe0a3_story.html',
  },
  {
    name: 'Melinda McGillivray',
    quote:
      'A concert at Mar-a-Lago in 2003: "All of a sudden I felt a grab...It was pretty close to the center of my butt. I was startled. I jumped."',
    source:
      'https://www.palmbeachpost.com/news/20161012/palm-beach-post-exclusive-local-woman-says-trump-groped-her',
  },
  {
    name: 'Natasha Stoynoff',
    quote:
      'An interview at Mar-a-Lago in 2005: "Trump shut the door behind us. I turned around, and within seconds he was pushing me against the wall and forcing his tongue down my throat."',
    source: 'https://people.com/politics/donald-trump-attacked-people-writer/',
  },
  {
    name: 'Ninni Laaksonen',
    quote:
      'The Late Show with David Letterman in 2006: "Trump stood right next to me and suddenly he squeezed my butt. He really grabbed my butt. It left me disgusted."',
    source: 'https://www.is.fi/viihde/art-2000001939677.html',
  },
  {
    name: 'Jessica Drake',
    quote:
      'A golf tournament in 2006: He invited her to his penthouse suite, she brought two other women, as she "didn\'t feel right" going alone. Trump grabbed each woman tightly and kissed them without their consent.',
    source: 'https://www.businessinsider.com/jessica-drake-trump-sexual-misconduct-2016-10',
  },
];

export default class SexualAssault extends React.Component {
  render() {
    return (
      <React.Fragment>
        <MetaTags>
          <title>TTA - Sexual Assault</title>
          <meta name="description" content="Trump tweets that nobody has more respect for women." />
          <meta property="og:title" content="Sexual Assault on Trump Twitter Archive" />
        </MetaTags>
        <div className={styles.page}>
          <h1>Sexual Assault</h1>
          <Paragraph type="quote">
            <ExternalLink href="https://www.youtube.com/watch?v=NcZcTnykYbw">
              "I just start kissing them. It's like a magnet. Just kiss. I don't even wait. And when
              you're a star, they let you do it. You can do anything. Grab 'em by the pussy. You can
              do anything"
            </ExternalLink>
          </Paragraph>
          <div>
            <h2>Jessica</h2>
            <Paragraph>
              A plane flight in the 1970s:{' '}
              <ExternalLink href="https://www.nytimes.com/2016/10/13/us/politics/donald-trump-women.html">
                "He was like an octopus...his hands were everywhere...it was an assault."
              </ExternalLink>{' '}
              She fled to the back of the plane.
            </Paragraph>
          </div>
          <div>
            <h2>Jean</h2>
            <Paragraph>
              A department store in the 1990s:{' '}
              <ExternalLink href="https://www.businessinsider.com/e-jean-carroll-accuses-trump-sexual-assault-2019-6">
                "He lunges at me, pushes me against the wall, hitting my head quite badly, and puts
                his mouth against my lips...he unzips his pants, and, forcing his fingers around my
                private area, thrusts his penis halfway — or completely, I'm not certain — inside
                me. It turns into a colossal struggle."
              </ExternalLink>{' '}
              She fled the dressing room.
            </Paragraph>
          </div>
          <div>
            <h2>Katie</h2>
            <Paragraph>
              At Jeffrey Epstein's apartment in 1994:{' '}
              <ExternalLink href="https://www.snopes.com/news/2016/06/23/donald-trump-rape-lawsuit/">
                "She was subject to extreme sexual and physical abuse by the Defendants, Donald J.
                Trump and Jeffrey E. Epstein, including forcible rape during a four month time
                span...when the Plaintiff Johnson was still only a minor of age 13."
              </ExternalLink>
            </Paragraph>
          </div>
          <div>
            <h2>Karen</h2>
            <Paragraph>
              A New Years party at Mar-a-Lago in the 2000s:{' '}
              <ExternalLink href="https://www.esquire.com/news-politics/a29391247/donald-trump-assault-allegations-karen-johnson-all-the-presidents-women-book/">
                "I was just walking to the bathroom. I was grabbed and pulled behind a tapestry, and
                it was him. And he’s strong, and he just kissed me. When he says that thing, 'Grab
                them in the pussy,' that hits me hard because when he grabbed me and pulled me into
                the tapestry, that's where he grabbed me — he grabbed me there in my front and
                pulled me in."
              </ExternalLink>
            </Paragraph>
          </div>
          <div>
            <h2>Rachel</h2>
            <Paragraph>
              An elevator in Trump Tower in 2005: They shook hands, he wouldn't let go, he kept
              kissing her on the cheeks, then{' '}
              <ExternalLink href="https://www.nytimes.com/2016/10/13/us/politics/donald-trump-women.html">
                "kissed me directly on the mouth"
              </ExternalLink>
              .
            </Paragraph>
          </div>
          <div>
            <h2>Summer</h2>
            <Paragraph>
              A meeting at a hotel in 2007: He gave her an open-mouthed, aggressive kiss while
              grabbing her shoulder, put his hand on her breast. Several times she pushed him away
              and indicated he should stop. He thrust his genitals at her.{' '}
              <ExternalLink href="https://www.theguardian.com/us-news/2016/oct/14/donald-trump-summer-zervos-apprentice-sexual-assault">
                "You do not have the right to treat women as sexual objects just because you are a
                star"
              </ExternalLink>
              .
            </Paragraph>
          </div>
          <div>
            <h2>Alva</h2>
            <Paragraph>
              A campaign rally in 2016:{' '}
              <ExternalLink href="https://www.washingtonpost.com/investigations/former-campaign-staffer-alleges-in-lawsuit-that-trump-kissed-her-without-her-consent-the-white-house-denies-the-charge/2019/02/25/fe1869a4-3498-11e9-946a-115a5932c45b_story.html">
                "Oh, my God, I think he’s going to kiss me. He's coming straight for my lips. So I
                turn my head, and he kisses me right on corner of my mouth, still holding my hand
                the entire time."
              </ExternalLink>
              .
            </Paragraph>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
