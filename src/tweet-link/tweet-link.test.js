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
    const id = wrapper.find('ExternalLink').props().id;
    expect(id).toEqual('1');
  });

  test('adds a class name', () => {
    const props = { ...createProps(), className: 'marshmellow' };
    const wrapper = shallow(<TweetLink {...props} />);
    const element = wrapper.find('.marshmellow');
    expect(element.exists()).toEqual(true);
  });

  test('renders text', () => {
    const props = createProps();
    const wrapper = shallow(<TweetLink {...props} />);
    const text = wrapper.find('ExternalLink').debug();
    expect(text).toContain('marshmellow cannon');
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
    const children = wrapper.find('TwitterTweetEmbed');
    expect(children.exists()).toEqual(true);
  });
});
