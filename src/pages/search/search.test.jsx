import React from 'react';
import { shallow } from 'enzyme';
import Search from './search.component';

const createProps = () => ({
  history: {
    push: jest.fn(),
  },
  location: {
    pathname: '/search',
  },
});

describe('Search', () => {
  it('renders', () => {
    const props = createProps();
    const wrapper = shallow(<Search {...props} />);
    const element = wrapper.find('.page');
    expect(element.exists()).toEqual(true);
  });
});
