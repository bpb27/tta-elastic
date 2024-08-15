import React from 'react';
import { shallow } from 'enzyme';
import GdpQuarterly from './gdp-quarterly.component';

describe('GdpQuarterly', () => {
  it('renders', () => {
    const wrapper = shallow(<GdpQuarterly/>);
    const element = wrapper.find('LineGraph');
    expect(element.exists()).toEqual(true);
  });
});
