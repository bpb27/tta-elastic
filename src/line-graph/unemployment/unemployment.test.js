import React from 'react';
import { shallow } from 'enzyme';
import Unemployment from './unemployment.component';

describe('Unemployment', () => {
  it('renders', () => {
    const wrapper = shallow(<Unemployment />);
    const element = wrapper.find('LineGraph');
    expect(element.exists()).toEqual(true);
  });
});
