import React from 'react';
import { shallow } from 'enzyme';
import QuickSearch from './quick-search.component';

describe('QuickSearch', () => {
  it('renders', () => {
    const wrapper = shallow(<QuickSearch/>);
    const element = wrapper.find('.quickSearch');
    expect(element.exists()).toEqual(true);
  });
});
