import React from 'react';
import { shallow } from 'enzyme';
import Manufacturing from './manufacturing.component';

describe('Manufacturing', () => {
  it('renders', () => {
    const wrapper = shallow(<Manufacturing />);
    const element = wrapper.find('LineGraph');
    expect(element.exists()).toEqual(true);
  });
});
