import React from 'react';
import { shallow } from 'enzyme';
import Skeleton from './skeleton.component';
import { byClass } from '../utils/enzyme';

describe('Skeleton', () => {
  it('renders', () => {
    const wrapper = shallow(<Skeleton />);
    const element = wrapper.find(byClass('.skeleton'));
    expect(element.exists()).toEqual(true);
  });
});
