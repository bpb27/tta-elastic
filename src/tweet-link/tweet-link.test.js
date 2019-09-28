import React from 'react';
import { shallow } from 'enzyme';
import TweetLink from './tweet-link.component';

const createProps = () => ({
  children: null,
  id: '1',
  showEmbedded: false,
  text: 'marshmellow cannon'
});

describe('TweetLink', () => {
  test('link to the tweet', () => {
    const props = createProps();
    const wrapper = shallow(<TweetLink {...props} />);
    const url = wrapper.find('a').props().href;
    expect(url).toEqual('https://twitter.com/realDonaldTrump/status/1');
  });

  test('renders text', () => {
    const props = createProps();
    const wrapper = shallow(<TweetLink {...props} />);
    const text = wrapper.find('a').text();
    expect(text).toEqual('"marshmellow cannon"');
  });

  test('renders children if passed (instead of text)', () => {
    const props = createProps();
    const wrapper = shallow(<TweetLink {...props}><h1>Smore</h1></TweetLink>);
    const children = wrapper.find('h1');
    expect(children.exists()).toEqual(true);
  });

  test('renders an embedded tweet', () => {
    const props = { ...createProps(), showEmbedded: true };
    const wrapper = shallow(<TweetLink {...props}><h1>Smore</h1></TweetLink>);
    const children = wrapper.find('EmbeddedTweet');
    expect(children.exists()).toEqual(true);
  });
});
