import React from 'react';
import { shallow } from 'enzyme';
import Tweet from './tweet.component';

const createProps = () => ({
  data: {
    date: 1558291837000, // May 19th 2019, 11:50:37 am
    device: 'Twitter for Android',
    favorites: 2,
    id: 1,
    isRetweet: false,
    retweets: 3,
    text: 'merry christmas you filthy animal',
  },
  index: 4,
  search: 'filthy',
});

describe('Tweet', () => {
  it('renders', () => {
    const props = createProps();
    const wrapper = shallow(<Tweet {...props} />);
    const element = wrapper.find('.tweet');
    expect(element.exists()).toEqual(true);
  });

  it('renders index', () => {
    const props = createProps();
    const wrapper = shallow(<Tweet {...props} />);
    const index = wrapper.find('.index').text();
    expect(index).toEqual('4.');
  });

  it('renders a formatted date', () => {
    const props = createProps();
    const wrapper = shallow(<Tweet {...props} />);
    const date = wrapper.find('.date').text();
    expect(date).toContain('May 19th 2019');
  });

  it('renders the device', () => {
    const props = createProps();
    const wrapper = shallow(<Tweet {...props} />);
    const date = wrapper.find('.device').text();
    expect(date).toContain(props.data.device);
  });

  it('renders the retweet count', () => {
    const props = createProps();
    const wrapper = shallow(<Tweet {...props} />);
    const retweets = wrapper.find('.stats span').at(0).text();
    expect(Number(retweets)).toEqual(props.data.retweets);
  });

  it('renders the favorite count', () => {
    const props = createProps();
    const wrapper = shallow(<Tweet {...props} />);
    const favorites = wrapper.find('.stats span').at(1).text();
    expect(Number(favorites)).toEqual(props.data.favorites);
  });

  it('formats larger numbers', () => {
    const props = createProps();
    props.data.favorites = 3100;
    const wrapper = shallow(<Tweet {...props} />);
    const favorites = wrapper.find('.stats span').at(1).text();
    expect(favorites).toEqual('3.1k');
  });

  it('renders link to twitter', () => {
    const props = createProps();
    const wrapper = shallow(<Tweet {...props} />);
    const link = wrapper.find('a').props().href;
    expect(link).toEqual('https://twitter.com/realdonaldtrump/status/1');
  });

  it('renders the text', () => {
    const props = createProps();
    const wrapper = shallow(<Tweet {...props} />);
    const text = wrapper.find('.text').text();
    expect(text).toEqual(props.data.text);
  });

  describe('highlight', () => {
    it('single word', () => {
      const props = { ...createProps(), search: 'filthy' };
      const wrapper = shallow(<Tweet {...props} />);
      const highlight = wrapper.find('.highlight').text();
      expect(highlight).toEqual(props.search);
    });

    it('case insensitive', () => {
      const props = { ...createProps(), search: 'FILTHY' };
      const wrapper = shallow(<Tweet {...props} />);
      const highlight = wrapper.find('.highlight').text();
      expect(highlight).toEqual(props.search.toLowerCase());
    });

    it('multiple words', () => {
      const props = { ...createProps(), search: 'merry animal' };
      const wrapper = shallow(<Tweet {...props} />);
      const firstHighlight = wrapper.find('.highlight').first().text();
      const secondHighlight = wrapper.find('.highlight').last().text();
      expect(firstHighlight).toEqual('merry');
      expect(secondHighlight).toEqual('animal');
    });
  });
});
