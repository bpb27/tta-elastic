import React from 'react';
import { shallow } from 'enzyme';
import Frequency from './frequency.component';

describe('Frequency', () => {
  it('renders', () => {
    const wrapper = shallow(<Frequency/>);
    const element = wrapper.find('.page');
    expect(element.exists()).toEqual(true);
  });
});
