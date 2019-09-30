import React from 'react';
import { shallow } from 'enzyme';
import Staff from './staff.component';

describe('Staff', () => {
  it('renders', () => {
    const wrapper = shallow(<Staff/>);
    expect(wrapper.find('List').exists()).toEqual(true);
    expect(wrapper.find('TweetLink').exists()).toEqual(true);
  });
});
