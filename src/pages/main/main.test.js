import React from 'react';
import { shallow } from 'enzyme';
import Main from './main.component';

const createProps = () => ({});

describe('Main', () => {
  it('renders', () => {
    const props = createProps();
    const wrapper = shallow(<Main {...props} />);
    const element = wrapper.find('.main');
    expect(element.exists()).toEqual(true);
  });
});
