import React from 'react';
import { shallow } from 'enzyme';
import Frequency from './frequency.component';
import { byClass } from '../../../utils/enzyme';

describe('Frequency', () => {
  it('renders', () => {
    const wrapper = shallow(<Frequency />);
    const element = wrapper.find(byClass('.page'));
    expect(element.exists()).toEqual(true);
  });
});
