import React from 'react';
import { shallow } from 'enzyme';
import Checkbox from './checkbox.component';

const createProps = () => ({
  label: 'Chubby',
  name: 'checkbox-for-chubby',
  onClick: jest.fn(),
  value: false,
});

describe('Checkbox', () => {
  it('renders', () => {
    const props = createProps();
    const wrapper = shallow(<Checkbox {...props} />);
    const element = wrapper.find('.checkbox');
    expect(element.exists()).toEqual(true);
  });

  it('renders label', () => {
    const props = createProps();
    const wrapper = shallow(<Checkbox {...props} />);
    const label = wrapper.find('label').text();
    expect(label).toEqual(props.label);
  });

  it('clicking toggles value', () => {
    const props = createProps();
    const wrapper = shallow(<Checkbox {...props} />);
    wrapper.find('.checkbox').simulate('click');
    expect(props.onClick).toHaveBeenCalledWith(!props.value);
  });
});
