import React from 'react';
import { shallow } from 'enzyme';
import FamilyIncome from './family-income.component';

describe('FamilyIncome', () => {
  it('renders', () => {
    const wrapper = shallow(<FamilyIncome />);
    const element = wrapper.find('LineGraph');
    expect(element.exists()).toEqual(true);
  });
});
