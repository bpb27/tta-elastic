import React from 'react';
import { shallow } from 'enzyme';
import Economy from './economy.component';
import { byClass } from '../../../utils/enzyme';

describe('Economy', () => {
  it('renders', () => {
    const wrapper = shallow(<Economy />);
    const element = wrapper.find(byClass('.page'));
    expect(element.exists()).toEqual(true);
  });
});
