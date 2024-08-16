import React from 'react';
import { shallow } from 'enzyme';
import TweetStats from './tweet-stats.component';
import { byClass } from '../../../../utils/enzyme';

const createProps = () => ({});

describe('TweetStats', () => {
  it('renders', () => {
    const props = createProps();
    const wrapper = shallow(<TweetStats {...props} />);
    const element = wrapper.find(byClass('.tweetStats'));
    expect(element.exists()).toEqual(true);
  });
});
