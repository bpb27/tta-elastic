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

  it('renders index (plus one to the number passed in)', () => {
    const props = createProps();
    const wrapper = shallow(<Tweet {...props} />);
    const index = wrapper.find('.index').text();
    expect(index).toEqual('5.');
  });

  it('renders a formatted date', () => {
    const props = createProps();
    const wrapper = shallow(<Tweet {...props} />);
    const date = wrapper.find('.date').text();
    expect(date).toContain('May 19th 2019');
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

  // TODO: render link, text, highlight, separate into smaller ^
});
