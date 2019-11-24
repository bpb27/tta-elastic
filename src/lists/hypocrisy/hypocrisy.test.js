import React from 'react';
import { shallow } from 'enzyme';
import Hypocrisy from './hypocrisy.component';

describe('Hypocrisy', () => {
  it('renders', () => {
    const wrapper = shallow(<Hypocrisy />);
    expect(wrapper.find('List').exists()).toEqual(true);
    expect(wrapper.find('TweetLink').exists()).toEqual(true);
  });
});
