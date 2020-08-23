import React from 'react';
import { shallow } from 'enzyme';
import TweetStats from './tweet-stats.component';

const createProps = () => ({

});

describe('TweetStats', () => {
  it('renders', () => {
    const props = createProps();
    const wrapper = shallow(<TweetStats {...props}/>);
    const element = wrapper.find('.tweetStats');
    expect(element.exists()).toEqual(true);
  });
});
