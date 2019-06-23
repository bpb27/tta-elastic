import React from 'react';
import { shallow } from 'enzyme';
import Search from './search.component';

const createProps = () => ({});

describe('Search', () => {
  it('renders', () => {
    const props = createProps();
    const wrapper = shallow(<Search {...props} />);
    const element = wrapper.find('#search-page');
    expect(element.exists()).toEqual(true);
  });
});
