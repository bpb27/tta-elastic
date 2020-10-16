import React from 'react';
import { shallow } from 'enzyme';
import Yelling from './yelling.component';

describe('Yelling', () => {
  it('renders', () => {
    const wrapper = shallow(<Yelling/>);
    const element = wrapper.find('.page');
    expect(element.exists()).toEqual(true);
  });
});
