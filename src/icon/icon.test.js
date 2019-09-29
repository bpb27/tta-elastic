import React from 'react';
import { shallow } from 'enzyme';
import Icon from './icon.component';

const createProps = () => ({
  name: 'CLOSE_BUTTON',
});

describe('Icon', () => {
  it('renders', () => {
    const props = createProps();
    const wrapper = shallow(<Icon {...props} />);
    const element = wrapper.find('.icon');
    expect(element.exists()).toEqual(true);
  });

  it('adds a class name', () => {
    const props = { ...createProps(), className: 'iconic' };
    const wrapper = shallow(<Icon {...props} />);
    const element = wrapper.find('.iconic');
    expect(element.exists()).toEqual(true);
  });

  it('adds a pointer class name if passed an onClick hander', () => {
    const props = { ...createProps(), onClick: jest.fn() };
    const wrapper = shallow(<Icon {...props} />);
    const element = wrapper.find('.pointer');
    expect(element.exists()).toEqual(true);
  });

  it('does not add a pointer class name if not passed an onClick hander', () => {
    const props = { ...createProps(), onClick: undefined };
    const wrapper = shallow(<Icon {...props} />);
    const element = wrapper.find('.pointer');
    expect(element.exists()).toEqual(false);
  });

  it('calls the onClick handler when clicked', () => {
    const props = { ...createProps(), onClick: jest.fn() };
    const wrapper = shallow(<Icon {...props} />);
    expect(props.onClick).toHaveBeenCalledTimes(0);
    wrapper.simulate('click');
    expect(props.onClick).toHaveBeenCalledTimes(1);
  });

  describe('names', () => {
    test('CLOSE_BUTTON', () => {
      const props = { ...createProps(), name: 'CLOSE_BUTTON' };
      const wrapper = shallow(<Icon {...props} />);
      const element = wrapper.find('svg');
      expect(element.exists()).toEqual(true);
    });

    test('DOWN_ARROW', () => {
      const props = { ...createProps(), name: 'DOWN_ARROW' };
      const wrapper = shallow(<Icon {...props} />);
      const element = wrapper.find('svg');
      expect(element.exists()).toEqual(true);
    });

    test('UP_ARROW', () => {
      const props = { ...createProps(), name: 'UP_ARROW' };
      const wrapper = shallow(<Icon {...props} />);
      const element = wrapper.find('svg');
      expect(element.exists()).toEqual(true);
    });
  });
});
