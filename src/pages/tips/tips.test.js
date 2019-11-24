import React from 'react';
import { shallow } from 'enzyme';
import Tips from './tips.component';

const createProps = () => ({
  closeModal: jest.fn(),
});

describe('Tips', () => {
  it('renders', () => {
    const props = createProps();
    const wrapper = shallow(<Tips {...props} />);
    const element = wrapper.find('.tips');
    expect(element.exists()).toEqual(true);
  });

  it('closes modal when clicking the x button', () => {
    const props = createProps();
    const wrapper = shallow(<Tips {...props} />);
    wrapper.find('Icon').simulate('click');
    expect(props.closeModal).toHaveBeenCalledTimes(1);
  });
});
