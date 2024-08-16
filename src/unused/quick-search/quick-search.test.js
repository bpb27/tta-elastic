import React from 'react';
import { shallow } from 'enzyme';
import QuickSearch from './quick-search.component';
import { byClass } from '../../utils/enzyme';

describe('QuickSearch', () => {
  it('renders', () => {
    const wrapper = shallow(<QuickSearch />);
    const element = wrapper.find(byClass('.quickSearch'));
    expect(element.exists()).toEqual(true);
  });
});
