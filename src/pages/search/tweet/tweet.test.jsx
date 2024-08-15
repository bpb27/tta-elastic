import React from 'react';
import { shallow } from 'enzyme';
import Tweet from './tweet.component';

const createProps = () => ({
  data: {
    date: 1558291837000, // May 19 2019, 2:50:37 PM EST
    device: 'Twitter for Android',
    favorites: 2,
    id: '1',
    isDeleted: false,
    isRetweet: false,
    retweets: 3,
    text: 'merry christmas you filthy animal',
  },
  index: 4,
  searchWords: ['filthy'],
});

describe('Tweet', () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = createProps();
    wrapper = shallow(<Tweet {...props} />);
  });

  it('renders', () => {
    expect(wrapper.find('.tweet').exists()).toEqual(true);
    expect(wrapper.find('.ttaTweet').exists()).toEqual(true);
  });

  it('renders metadata', () => {
    expect(wrapper.find('Metadata').exists()).toEqual(true);
  });

  it('renders text', () => {
    expect(wrapper.find('.text').exists()).toEqual(true);
  });

  describe('highlighter', () => {
    it('renders text', () => {
      expect(wrapper.find('Highlighter').props().textToHighlight).toEqual(props.data.text);
    });

    it('passes search words to the highlighter', () => {
      expect(wrapper.find('Highlighter').props().searchWords).toEqual(props.searchWords);
    });
  });

  describe('twitter button', () => {
    it('renders highlighter by default', () => {
      expect(wrapper.find('Highlighter').exists()).toEqual(true);
      expect(wrapper.find('.plain').exists()).toEqual(true);
    });

    it('renders embedded tweet on click', () => {
      wrapper.setState({ showTwitterView: true }); // simulate click
      expect(wrapper.find('TweetLink').exists()).toEqual(true);
      expect(wrapper.find('.embedded').exists()).toEqual(true);
    });
  });
});
