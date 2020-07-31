import React from 'react';
import { shallow } from 'enzyme';
import Debt from './debt.component';

describe('Debt', () => {
  it('renders', () => {
    const wrapper = shallow(<Debt/>);
    const element = wrapper.find('LineGraph');
    expect(element.exists()).toEqual(true);
  });
});
