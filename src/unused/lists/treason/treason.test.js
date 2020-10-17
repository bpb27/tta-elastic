import React from 'react';
import { shallow } from 'enzyme';
import Treason from './treason.component';

describe('Treason', () => {
  it('renders', () => {
    const wrapper = shallow(<Treason/>);
    const element = wrapper.find('List');
    expect(element.exists()).toEqual(true);
  });
});
