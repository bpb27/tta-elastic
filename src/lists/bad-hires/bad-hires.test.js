import React from 'react';
import { shallow } from 'enzyme';
import BadHires from './bad-hires.component';

describe('BadHires', () => {
  it('renders', () => {
    const wrapper = shallow(<BadHires />);
    const element = wrapper.find('.badHires');
    expect(element.exists()).toEqual(true);
  });

  it('clicking the button expands the content', () => {
    const wrapper = shallow(<BadHires />);
    expect(wrapper.find('.more').exists()).toEqual(false);
    wrapper.find('Button').simulate('click');
    expect(wrapper.find('.more').exists()).toEqual(true);
  });
});
