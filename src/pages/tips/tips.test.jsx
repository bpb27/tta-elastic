import React from 'react';
import { shallow } from 'enzyme';
import Tips from './tips.component';
import { byClass } from '../../utils/enzyme';

const createProps = () => ({
  closeModal: vi.fn(),
});

describe('Tips', () => {
  it('renders', () => {
    const props = createProps();
    const wrapper = shallow(<Tips {...props} />);
    const element = wrapper.find(byClass('.tips'));
    expect(element.exists()).toEqual(true);
  });

  it('closes modal when clicking the x button', () => {
    const props = createProps();
    const wrapper = shallow(<Tips {...props} />);
    wrapper.find('Icon').simulate('click');
    expect(props.closeModal).toHaveBeenCalledTimes(1);
  });
});
