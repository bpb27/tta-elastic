import React from 'react';
import { shallow } from 'enzyme';
import Tweet from './tweet.component';

const createProps = () => ({
  data: {
    date: 1558291837000, // May 19 2019, 2:50:37 PM EST
    device: 'Twitter for Android',
    favorites: 2,
    id: '1',
    isRetweet: false,
    retweets: 3,
    text: 'merry christmas you filthy animal',
  },
  index: 4,
  searchWords: ['filthy'],
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
    expect(date).toEqual('May 19 2019, 2:50:37 PM EST');
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
    const text = wrapper.find('.stats span').at(0).text();
    expect(text).toContain(props.data.retweets);
  });

  it('renders the favorite count', () => {
    const props = createProps();
    const wrapper = shallow(<Tweet {...props} />);
    const text = wrapper.find('.stats span').at(1).text();
    expect(text).toContain(props.data.favorites);
  });

  it('formats larger numbers', () => {
    const props = createProps();
    props.data.favorites = 3100;
    const wrapper = shallow(<Tweet {...props} />);
    const text = wrapper.find('.stats span').at(1).text().trim();
    expect(text).toContain('3.1k');
  });

  it('renders button to show tweet spotlight', () => {
    const props = createProps();
    const wrapper = shallow(<Tweet {...props} />);
    const button = wrapper.find('.stats span').at(2);
    expect(button.exists()).toEqual(true);
  });

  it('renders the text', () => {
    const props = createProps();
    const wrapper = shallow(<Tweet {...props} />);
    const text = wrapper.find('Highlighter').props().textToHighlight;
    expect(text).toEqual(props.data.text);
  });

  it('passes search words to the highlighter', () => {
    const props = createProps();
    const wrapper = shallow(<Tweet {...props} />);
    const { searchWords } = wrapper.find('Highlighter').props();
    expect(searchWords).toEqual(props.searchWords);
  });
});
