import React from 'react';
import { shallow } from 'enzyme';
import Button from './button.component';

const createProps = () => ({
  className: 'buttress',
  disabled: false,
  onClick: jest.fn(),
});

describe('Button', () => {
  it('renders', () => {
    const props = createProps();
    const wrapper = shallow(<Button {...props}>Hey</Button>);
    const element = wrapper.find('.button');
    expect(element.exists()).toEqual(true);
  });

  it('adds a class name', () => {
    const props = createProps();
    const wrapper = shallow(<Button {...props}>Hey</Button>);
    const element = wrapper.find('.buttress');
    expect(element.exists()).toEqual(true);
  });

  it('adds the disabled prop', () => {
    const props = { ...createProps(), disabled: true };
    const wrapper = shallow(<Button {...props}>Hey</Button>);
    const { disabled } = wrapper.find('.button').props();
    expect(disabled).toEqual(true);
  });

  it('renders children', () => {
    const props = { ...createProps(), disabled: true };
    const wrapper = shallow(<Button {...props}>Hey</Button>);
    const text = wrapper.find('.button').text();
    expect(text).toEqual('Hey');
  });

  it('calls the on click handler when clicked', () => {
    const props = createProps();
    const wrapper = shallow(<Button {...props}>Hey</Button>);
    expect(props.onClick).toHaveBeenCalledTimes(0);
    wrapper.find('.button').simulate('click');
    expect(props.onClick).toHaveBeenCalledTimes(1);
  });
});
