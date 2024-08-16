import React from 'react';
import { shallow } from 'enzyme';
import Yelling from './yelling.component';
import { byClass } from '../../../utils/enzyme';

describe('Yelling', () => {
  it('renders', () => {
    const wrapper = shallow(<Yelling />);
    const element = wrapper.find(byClass('.page'));
    expect(element.exists()).toEqual(true);
  });
});
