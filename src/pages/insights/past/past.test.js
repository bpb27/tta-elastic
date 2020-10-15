import React from 'react';
import { shallow } from 'enzyme';
import Past from './past.component';

describe('Past', () => {
  it('renders', () => {
    const wrapper = shallow(<Past/>);
    const element = wrapper.find('.page');
    expect(element.exists()).toEqual(true);
  });
});
