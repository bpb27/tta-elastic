import React from 'react';
import { shallow } from 'enzyme';
import Pagination from './pagination.component';

const createProps = () => ({
  currentPage: 3,
  setPage: jest.fn(),
  totalPages: 5,
});

describe('Pagination', () => {
  it('renders', () => {
    const props = createProps();
    const wrapper = shallow(<Pagination {...props} />);
    const element = wrapper.find('.pagination');
    expect(element.exists()).toEqual(true);
  });

  it('calls prev when clicked', () => {
    const props = createProps();
    const wrapper = shallow(<Pagination {...props} />);
    wrapper.find('Button').first().simulate('click');
    expect(props.setPage).toHaveBeenCalledTimes(1);
    expect(props.setPage).toHaveBeenCalledWith(2);
  });

  it('calls next when clicked', () => {
    const props = createProps();
    const wrapper = shallow(<Pagination {...props} />);
    wrapper.find('Button').last().simulate('click');
    expect(props.setPage).toHaveBeenCalledTimes(1);
    expect(props.setPage).toHaveBeenCalledWith(4);
  });

  it('disables prev button', () => {
    const props = { ...createProps(), currentPage: 0 };
    const wrapper = shallow(<Pagination {...props} />);
    const { disabled } = wrapper.find('Button').first().props();
    expect(disabled).toEqual(true);
  });

  it('disables next button', () => {
    const props = { ...createProps(), currentPage: 5 };
    const wrapper = shallow(<Pagination {...props} />);
    const { disabled } = wrapper.find('Button').last().props();
    expect(disabled).toEqual(true);
  });
});
