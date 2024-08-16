import React from 'react';
import { shallow } from 'enzyme';
import Insults from './insults.component';
import { byClass } from '../../../utils/enzyme';

describe('Insults', () => {
  it('renders', () => {
    const wrapper = shallow(<Insults />);
    const element = wrapper.find(byClass('.page'));
    expect(element.exists()).toEqual(true);
  });
});
