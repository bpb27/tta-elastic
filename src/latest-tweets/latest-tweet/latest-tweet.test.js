import React from 'react';
import { shallow } from 'enzyme';
import LatestTweet from './latest-tweet.component';

const createProps = () => ({
  data: {
    date: 1569705285000, // Sep 28 2019, 5:14:45 PM EST
    id: '1',
    text: 'marshmellow cannon',
  },
  embedded: false,
});

describe('LatestTweet', () => {
  it('renders', () => {
    const props = createProps();
    const wrapper = shallow(<LatestTweet {...props} />);
    const element = wrapper.find('.latestTweet');
    expect(element.exists()).toEqual(true);
  });

  it('renders an embedded tweet', () => {
    const props = { ...createProps(), embedded: true };
    const wrapper = shallow(<LatestTweet {...props} />);
    const element = wrapper.find('TwitterTweetEmbed');
    expect(element.exists()).toEqual(true);
  });

  it('renders text', () => {
    const props = createProps();
    const wrapper = shallow(<LatestTweet {...props} />);
    const text = wrapper.find('.latestTweet').text();
    expect(text).toContain(props.data.text);
  });

  it('passes id to the external link', () => {
    const props = createProps();
    const wrapper = shallow(<LatestTweet {...props} />);
    const { id } = wrapper.find('ExternalLink').props();
    expect(id).toContain(props.data.id);
  });

  it('passes id to the embedded tweet', () => {
    const props = { ...createProps(), embedded: true };
    const wrapper = shallow(<LatestTweet {...props} />);
    const { tweetId } = wrapper.find('TwitterTweetEmbed').props();
    expect(tweetId).toContain(props.data.id);
  });
});
