import React from 'react';
import { shallow } from 'enzyme';
import SexualAssault from './sexual-assault.component';

describe('SexualAssault', () => {
  it('renders', () => {
    const wrapper = shallow(<SexualAssault/>);
    const element = wrapper.find('.page');
    expect(element.exists()).toEqual(true);
  });
});
