import React from 'react';
import { shallow } from 'enzyme';
import { byClass } from '../utils/enzyme';
import Icon, { paths } from './icon.component';

const createProps = () => ({
  name: 'CLOSE_BUTTON',
});

describe('Icon', () => {
  it('renders', () => {
    const props = createProps();
    const wrapper = shallow(<Icon {...props} />);
    const element = wrapper.find(byClass('.icon'));
    expect(element.exists()).toEqual(true);
  });

  it('adds a class name', () => {
    const props = { ...createProps(), className: 'iconic' };
    const wrapper = shallow(<Icon {...props} />);
    const element = wrapper.find('.iconic');
    expect(element.exists()).toEqual(true);
  });

  describe('svg paths', () => {
    it('correctly finds a known path', () => {
      const props = createProps();
      const wrapper = shallow(<Icon {...props} />);
      const path = wrapper.find('path').props().d;
      expect(path).toEqual(paths['CLOSE_BUTTON']);
    });

    it('throws an error on an unknown path', () => {
      const props = { ...createProps(), name: 'NOT_A_REAL_PATH' };
      try {
        shallow(<Icon {...props} />);
      } catch (e) {
        expect(e.message).toEqual('Failed to render a "NOT_A_REAL_PATH" icon.');
      }
    });
  });

  describe('pointer class', () => {
    it('adds a pointer class if passed an onClick hander', () => {
      const props = { ...createProps(), onClick: vi.fn() };
      const wrapper = shallow(<Icon {...props} />);
      const element = wrapper.find(byClass('.pointer'));
      expect(element.exists()).toEqual(true);
    });

    it('does not add a pointer class if not passed an onClick hander', () => {
      const props = { ...createProps(), onClick: undefined };
      const wrapper = shallow(<Icon {...props} />);
      const element = wrapper.find(byClass('.pointer'));
      expect(element.exists()).toEqual(false);
    });
  });

  it('calls the on click handler when clicked', () => {
    const props = { ...createProps(), onClick: vi.fn() };
    const wrapper = shallow(<Icon {...props} />);
    expect(props.onClick).toHaveBeenCalledTimes(0);
    wrapper.simulate('click');
    expect(props.onClick).toHaveBeenCalledTimes(1);
  });

  it('sets the size', () => {
    const props = { ...createProps(), size: 16 };
    const wrapper = shallow(<Icon {...props} />);
    const { height, width } = wrapper.find('svg').props();
    expect(height).toEqual('16px');
    expect(width).toEqual('16px');
  });
});
