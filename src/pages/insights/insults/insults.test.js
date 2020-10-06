import React from 'react';
import { shallow } from 'enzyme';
import Insults from './insults.component';

describe('Insults', () => {
  it('renders', () => {
    const wrapper = shallow(<Insults/>);
    const element = wrapper.find('.page');
    expect(element.exists()).toEqual(true);
  });
});
