import React from 'react';
import { shallow } from 'enzyme';
import Skeleton from './skeleton.component';

describe('Skeleton', () => {
  it('renders', () => {
    const wrapper = shallow(<Skeleton />);
    const element = wrapper.find('.skeleton');
    expect(element.exists()).toEqual(true);
  });
});
