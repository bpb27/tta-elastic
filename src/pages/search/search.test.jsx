import React from 'react';
import { shallow } from 'enzyme';
import Search from './search.component';
import { byClass } from '../../utils/enzyme';

const createProps = () => ({
  history: {
    push: vi.fn(),
  },
  location: {
    pathname: '/search',
  },
});

describe('Search', () => {
  it('renders', () => {
    const props = createProps();
    const wrapper = shallow(<Search {...props} />);
    const element = wrapper.find(byClass('.page'));
    expect(element.exists()).toEqual(true);
  });
});
