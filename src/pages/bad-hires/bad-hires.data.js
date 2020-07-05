import imageBannon from 'assets/images/bannon.jpeg';
import imageBolton from 'assets/images/bolton.jpeg';
import imageFlynn from 'assets/images/flynn.jpg';
import imageKelly from 'assets/images/kelly.jpg';
import imageManafort from 'assets/images/manafort.jpeg';
import imageMattis from 'assets/images/mattis.jpeg';
import imageMcgahn from 'assets/images/mcgahn.jpeg';
import imagePowell from 'assets/images/powell.png';
import imageScaramucci from 'assets/images/scaramucci.jpeg';
import imageSessions from 'assets/images/sessions.jpg';
import imageTillerson from 'assets/images/tillerson.jpg';

const tillerson = {
  name: 'Rex Tillerson',
  title: 'Secretary of State I',
  image: imageTillerson,
  altText: 'Tillerson and Trump',
  tweets: [
    {
      id: '808638507161882624',
      praise: true,
    },
    {
      id: '1071132880368132096',
      highlights: [
        'Rex Tillerson, didn’t have the mental capacity needed. He was dumb as a rock and I couldn’t get rid of him fast enough. He was lazy as hell.',
      ],
    },
    {
      id: '1131537528736100352',
      highlights: [
        'Rex Tillerson, a man who is “dumb as a rock” and totally ill prepared and ill equipped to be Secretary of State, made up a story (he got fired)',
      ],
    },
  ],
};

const mattis = {
  name: 'Jim Mattis',
  title: 'Secretary of Defense I',
  image: imageMattis,
  altText: 'Mattis and Trump',
  tweets: [
    {
      id: '800332639844659201',
      praise: true,
    },
    {
      id: '1270346144485343232',
      highlights: [
        'Mattis was our Country’s most overrated General. He talked a lot, but never “brought home the bacon.” He was terrible! Someday I will tell the real story on him',
      ],
    },
    {
      id: '1270346508165144576',
      highlights: [
        'Lap Dog Mattis is an embarrassment to America!',
      ],
    },
  ],
};

const sessions = {
  name: 'Jeff Sessions',
  title: 'Attorney General I',
  image: imageSessions,
  altText: 'Sessions and Trump',
  tweets: [
    {
      id: '829496507841789952',
      praise: true,
    },
    {
      id: '1002027245131661312',
      highlights: [
        'The recusal of Jeff Sessions was an unforced betrayal of the President of the United States',
      ],
    },
    {
      id: '1263970567838932993',
      highlights: [
        'Alabama, do not trust Jeff Sessions. He let our Country down.',
      ],
    },
  ],
};

const kelly = {
  name: 'John Kelly',
  title: 'Chief of Staff II',
  image: imageKelly,
  altText: 'Kelly and Trump',
  tweets: [
    {
      id: '891038014314598400',
      praise: true,
    },
    {
      id: '1227986935240691712',
      highlights: [
        'I terminated John Kelly, which I couldn’t do fast enough, he knew full well that he was way over his head.',
        'Being Chief of Staff just wasn’t for him.',
        'He came in with a bang, went out with a whimper, but like so many X’s, he misses the action & just can’t keep his mouth shut',
      ],
    },
    {
      id: '1268683083852779520',
      highlights: [
        'Why would I tell him, he was not in my inner-circle, was totally exhausted by the job, and in the end just slinked away into obscurity',
      ],
    },
  ],
};

const powell = {
  name: 'Jerome Powell',
  title: 'Chairman of the Fed',
  image: imagePowell,
  altText: 'Powell and Trump',
  tweets: [
    {
      id: '926216279287042048',
      praise: true,
    },
    {
      id: '1164158321265451008',
      highlights: [
        'The only problem we have is Jay Powell and the Fed. He’s like a golfer who can’t putt, has no touch.',
        'don’t count on him! So far he has called it wrong, and only let us down',
      ],
    },
    {
      id: '1164914610836783104',
      highlights: [
        'My only question is, who is our bigger enemy, Jay Powell or Chairman Xi?',
      ],
    },
  ],
};

const bolton = {
  name: 'John Bolton',
  title: 'National Security Advisor IV',
  image: imageBolton,
  altText: 'Bolton and Trump',
  tweets: [
    {
      id: '984017894240604161',
      praise: true,
      highlights: [
        'Feels great to have Bolton &amp, Larry K on board',
      ],
    },
    {
      id: '1275375135483146241',
      highlights: [
        'Washed up Creepster John Bolton is a lowlife who should be in jail, money seized, for disseminating, for profit, highly Classified information.',
      ],
    },
    {
      id: '1274353051252535298',
      highlights: [
        'Wacko John Bolton “a despicable man who failed in his duty to protect America.” Also stated that he should never be allowed to serve in government again. So true!',
        'John Bolton, who was all washed up until I brought him back and gave him a chance, broke the law by releasing Classified Information',
        'He must pay a very big price for this',
      ],
    },
  ],
};

const bannon = {
  name: 'Steve Bannon',
  title: 'Chief Strategist and Campaign Manager III',
  image: imageBannon,
  altText: 'Bannon and Trump',
  tweets: [
    {
      id: '898870621584596993',
      praise: true,
    },
    {
      id: '949303089416294401',
      highlights: [
        'dumped the leaker known as Sloppy Steve Bannon. Smart!',
      ],
    },
    {
      id: '949498795074736129',
      highlights: [
        'Sloppy Steve Bannon, who cried when he got fired and begged for his job. Now Sloppy Steve has been dumped like a dog by almost everyone. Too bad!',
      ],
    },
  ],
};

const scaramucci = {
  name: 'Anthony Scaramucci',
  title: 'Communications Director III',
  image: imageScaramucci,
  altText: 'Scaramucci and Trump',
  tweets: [
    {
      id: '1163440418555604998',
      highlights: [
        'Anthony Scaramucci is a highly unstable “nut job”',
        'unfortunately wheedled his way into my campaign. I barely knew him until his 11 days of gross incompetence-made a fool of himself, bad on TV. Abused staff, got fired.',
        'Getting divorced. He was a mental wreck. We didn’t want him around.',
      ],
    },
    {
      id: '1160382091592384513',
      highlights: [
        'Anthony Scaramucci, who was quickly terminated (11 days) from a position that he was totally incapable of handling, now seems to do nothing but television',
      ],
    },
  ],
};

const flynn = {
  name: 'Michael Flynn',
  title: 'National Security Advisor I',
  image: imageFlynn,
  altText: 'Flynn and Trump',
  tweets: [
    {
      id: '937007006526959618',
      highlights: [
        'I had to fire General Flynn because he lied to the Vice President and the FBI. He has pled guilty to those lies.',
      ],
    },
  ],
};

const manafort = {
  name: 'Paul Manafort',
  title: 'Campaign Manager II',
  image: imageManafort,
  altText: 'Manafort and Trump',
  tweets: [
    {
      id: '1003266374473519105',
      highlights: [
        'why wouldn’t the FBI or Department of “Justice” have told me that they were secretly investigating Paul Manafort',
        'Should have told me!',
      ],
    },
  ],
};

const mcgahn = {
  name: 'Don McGahn',
  title: 'White House Counsel I',
  image: imageMcgahn,
  altText: 'McGahn and Trump',
  tweets: [
    {
      id: '1034810550025433090',
      highlights: [
        'I have worked with Don for a long time and truly appreciate his service!',
      ],
      praise: true,
    },
    {
      id: '1127342552745762816',
      highlights: [
        'Actually, lawyer Don McGahn had a much better chance of being fired than Mueller. Never a big fan!',
      ],
    },
  ],
};

export default [
  tillerson,
  mattis,
  sessions,
  kelly,
  powell,
  bolton,
  bannon,
  scaramucci,
  flynn,
  manafort,
  mcgahn,
];
