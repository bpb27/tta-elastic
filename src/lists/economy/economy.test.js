import React from 'react';
import { shallow } from 'enzyme';
import Economy from './economy.component';

describe('Economy', () => {
  it('renders', () => {
    const wrapper = shallow(<Economy/>);
    const element = wrapper.find('List');
    expect(element.exists()).toEqual(true);
  });

  it('shows more', () => {
    const wrapper = shallow(<Economy/>);
    expect(wrapper.find('GdpQuarterly').exists()).toEqual(false);
    wrapper.setState({ showMore: true });
    expect(wrapper.find('GdpQuarterly').exists()).toEqual(true);
  });
});
