import React from 'react';
import { shallow } from 'enzyme';
import Faq from './faq.component';

describe('FAQ page', () => {
  it('renders', () => {
    const wrapper = shallow(<Faq/>);
    const element = wrapper.find('.page');
    expect(element.exists()).toEqual(true);
  });
});
