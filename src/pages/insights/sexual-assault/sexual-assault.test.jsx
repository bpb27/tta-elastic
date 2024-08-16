import React from 'react';
import { shallow } from 'enzyme';
import SexualAssault from './sexual-assault.component';
import { byClass } from '../../../utils/enzyme';

describe('SexualAssault', () => {
  it('renders', () => {
    const wrapper = shallow(<SexualAssault />);
    const element = wrapper.find(byClass('.page'));
    expect(element.exists()).toEqual(true);
  });
});
