import React from 'react';
import { shallow } from 'enzyme';
import { byClass } from 'utils/enzyme';
import Button from './button.component';

const createProps = () => ({
  className: 'buttress',
  disabled: false,
  onClick: vi.fn(),
});

describe('Button', () => {
  it('renders', () => {
    const props = createProps();
    const wrapper = shallow(<Button {...props}>Hey</Button>);
    const element = wrapper.find(byClass('.button'));
    expect(element.exists()).toEqual(true);
  });

  it('adds a class name', () => {
    const props = createProps();
    const wrapper = shallow(<Button {...props}>Hey</Button>);
    const element = wrapper.find('.buttress');
    expect(element.exists()).toEqual(true);
  });

  it('adds the selected class', () => {
    const props = { ...createProps(), selected: true };
    const wrapper = shallow(<Button {...props}>Hey</Button>);
    const element = wrapper.find(byClass('.selected'));
    expect(element.exists()).toEqual(true);
  });

  it('adds the disabled prop', () => {
    const props = { ...createProps(), disabled: true };
    const wrapper = shallow(<Button {...props}>Hey</Button>);
    const { disabled } = wrapper.find(byClass('.button')).props();
    expect(disabled).toEqual(true);
  });

  it('renders children', () => {
    const props = { ...createProps(), disabled: true };
    const wrapper = shallow(<Button {...props}>Hey</Button>);
    const text = wrapper.find(byClass('.button')).text();
    expect(text).toEqual('Hey');
  });

  it('calls the on click handler when clicked', () => {
    const props = createProps();
    const wrapper = shallow(<Button {...props}>Hey</Button>);
    expect(props.onClick).toHaveBeenCalledTimes(0);
    wrapper.find(byClass('.button')).simulate('click');
    expect(props.onClick).toHaveBeenCalledTimes(1);
  });
});
