import React from 'react';
import { shallow } from 'enzyme';
import RepetitiveEndorsements from './repetitive-endorsements.component';

describe('RepetitiveEndorsements', () => {
  it('renders', () => {
    const wrapper = shallow(<RepetitiveEndorsements />);
    expect(wrapper.find('List').exists()).toEqual(true);
    expect(wrapper.find('TweetLink').exists()).toEqual(true);
  });
});
