import React from 'react';
import { shallow } from 'enzyme';
import GDP from './gdp.component';

describe('GDP', () => {
  it('renders', () => {
    const wrapper = shallow(<GDP/>);
    const element = wrapper.find('#graph-gdp');
    expect(element.exists()).toEqual(true);
  });
});
