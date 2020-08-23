import React from 'react';
import { shallow } from 'enzyme';
import TweetFrequency from './tweet-frequency.component';

const createProps = () => ({

});

describe('TweetFrequency', () => {
  it('renders', () => {
    const props = createProps();
    const wrapper = shallow(<TweetFrequency {...props}/>);
    const element = wrapper.find('.tweetFrequency');
    expect(element.exists()).toEqual(true);
  });
});
