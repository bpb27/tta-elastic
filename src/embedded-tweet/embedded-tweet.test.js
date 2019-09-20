import React from 'react';
import { shallow } from 'enzyme';
import EmbeddedTweet from './embedded-tweet.component';

const createProps = () => ({
  id: '1',
});

describe('EmbeddedTweet', () => {
  it('renders', () => {
    const props = createProps();
    const wrapper = shallow(<EmbeddedTweet {...props} />);
    const element = wrapper.find('.embeddedTweet');
    expect(element.exists()).toEqual(true);
  });

  it('creates the href to twitter', () => {
    const props = createProps();
    const wrapper = shallow(<EmbeddedTweet {...props} />);
    const href = wrapper.find('a').props().href;
    expect(href).toEqual('https://twitter.com/realDonaldTrump/status/1');
  });

  it('adds default pre-load text', () => {
    const props = createProps();
    const wrapper = shallow(<EmbeddedTweet {...props} />);
    const text = wrapper.find('p').text();
    expect(text).toEqual('Loading...');
  });

  it('adds specific pre-load text', () => {
    const props = { ...createProps(), text: 'Malicious turd' };
    const wrapper = shallow(<EmbeddedTweet {...props} />);
    const text = wrapper.find('p').text();
    expect(text).toEqual(props.text);
  });
});
