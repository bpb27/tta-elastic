import React from 'react';
import { shallow } from 'enzyme';
import Tweet from './tweet.component';

const createProps = () => ({
  data: {
    id_str: '1',
    created_at: 'Wed Dec 31 23:59:22 +0000 2014',
    favorite_count: 2,
    source: 'Twitter for Android',
    text: 'merry christmas you filthy animal',
    retweet_count: 3,
    is_retweet: false,
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
    const text = wrapper.text();
    expect(text).toContain('4.');
  });

  it('renders metadata', () => {
    const props = createProps();
    const wrapper = shallow(<Tweet {...props} />);
    const text = wrapper.text();
    expect(text).toContain('Dec 31st 2014');
    expect(text).toContain('Twitter for Android');
    expect(text).toContain('2'); // retweet
    expect(text).toContain('3'); // favorite
  });

  // TODO: render link, text, highlight, separate into smaller ^
});
