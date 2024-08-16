import React from 'react';
import { shallow } from 'enzyme';
import Faq from './faq.component';
import { byClass } from '../../utils/enzyme';

describe('FAQ page', () => {
  it('renders', () => {
    const wrapper = shallow(<Faq />);
    const element = wrapper.find(byClass('.page'));
    expect(element.exists()).toEqual(true);
  });
});
