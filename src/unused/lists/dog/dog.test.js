import React from 'react';
import { shallow } from 'enzyme';
import Dog from './dog.component';

describe('Dog', () => {
  it('renders', () => {
    const wrapper = shallow(<Dog/>);
    expect(wrapper.find('List').exists()).toEqual(true);
    expect(wrapper.find('TweetLink').exists()).toEqual(true);
  });
});
