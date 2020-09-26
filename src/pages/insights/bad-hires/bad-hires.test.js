import React from 'react';
import { shallow } from 'enzyme';
import BadHires from './bad-hires.component';

describe('BadHires', () => {
  it('renders', () => {
    const wrapper = shallow(<BadHires/>);
    const element = wrapper.find('.page');
    expect(element.exists()).toEqual(true);
  });
});
