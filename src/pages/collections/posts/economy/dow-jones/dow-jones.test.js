import React from 'react';
import { shallow } from 'enzyme';
import GraphDowJones from './dow-jones.component';

describe('DowJones', () => {
  it('renders', () => {
    const wrapper = shallow(<GraphDowJones/>);
    const element = wrapper.find('LineGraph');
    expect(element.exists()).toEqual(true);
  });
});
