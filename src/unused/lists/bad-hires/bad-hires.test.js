import React from 'react';
import { shallow } from 'enzyme';
import BadHires from './bad-hires.component';
import { byClass } from '../../../utils/enzyme';

describe('BadHires', () => {
  it('renders', () => {
    const wrapper = shallow(<BadHires />);
    const element = wrapper.find('List');
    expect(element.exists()).toEqual(true);
  });

  it('shows more', () => {
    const wrapper = shallow(<BadHires />);
    expect(wrapper.find(byClass('.more')).exists()).toEqual(false);
    wrapper.setState({ showMore: true });
    expect(wrapper.find(byClass('.more')).exists()).toEqual(true);
  });
});
