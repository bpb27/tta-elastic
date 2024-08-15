import React from 'react';
import { shallow } from 'enzyme';
import Economy from './economy.component';

describe('Economy', () => {
  it('renders', () => {
    const wrapper = shallow(<Economy/>);
    const element = wrapper.find('.page');
    expect(element.exists()).toEqual(true);
  });
});
