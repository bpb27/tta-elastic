import React from 'react';
import { shallow } from 'enzyme';
import GraphGDP from './gdp.component';

describe('GDP', () => {
  it('renders', () => {
    const wrapper = shallow(<GraphGDP/>);
    const element = wrapper.find('LineGraph');
    expect(element.exists()).toEqual(true);
  });
});
