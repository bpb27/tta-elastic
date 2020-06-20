import React from 'react';
import { shallow } from 'enzyme';
import Main from './main.component';

describe('Main', () => {
  it('renders', () => {
    const wrapper = shallow(<Main/>);
    const element = wrapper.find('.main');
    expect(element.exists()).toEqual(true);
  });
});
