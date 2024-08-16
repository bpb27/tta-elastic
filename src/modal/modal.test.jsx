import React from 'react';
import { shallow } from 'enzyme';
import Modal from './modal.component';
import { byClass } from '../utils/enzyme';

const createProps = () => ({
  children: <p>Hello</p>,
  closeModal: vi.fn(),
  footerText: 'Blue suede',
  headerText: 'Fancy tupee',
});

describe('Modal', () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = createProps();
    wrapper = shallow(<Modal {...props} />);
  });

  it('renders', () => {
    expect(wrapper.find(byClass('.modal')).exists()).toEqual(true);
  });

  it('renders children', () => {
    expect(wrapper.find('p').exists()).toEqual(true);
  });

  it('renders header', () => {
    expect(wrapper.find('h2').exists()).toEqual(true);
  });

  it('renders footer', () => {
    expect(wrapper.find('h6').exists()).toEqual(true);
  });

  it('closes modal when clicking the x button', () => {
    wrapper.find('Icon').simulate('click');
    expect(props.closeModal).toHaveBeenCalledTimes(1);
  });

  describe('no header or footer text', () => {
    beforeEach(() => {
      props = { ...createProps(), footerText: undefined, headerText: undefined };
      wrapper = shallow(<Modal {...props} />);
    });

    it('does not render header', () => {
      expect(wrapper.find('h2').exists()).toEqual(false);
    });

    it('does not render footer', () => {
      expect(wrapper.find('h6').exists()).toEqual(false);
    });
  });
});
