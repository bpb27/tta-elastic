import React from 'react';
import { shallow } from 'enzyme';
import { vi } from 'vitest';
import ShowMore from './show-more.component';

const createProps = () => ({
  handleClick: vi.fn(),
  isShowing: false,
});

describe('ShowMore', () => {
  let element;
  let props;
  let wrapper;

  beforeEach(() => {
    props = createProps();
    wrapper = shallow(<ShowMore {...props} />);
    element = wrapper.find('Button');
  });
  it('renders', () => {
    expect(element.exists()).toEqual(true);
  });

  it('handles click', () => {
    expect(props.handleClick).toHaveBeenCalledTimes(0);
    element.simulate('click');
    expect(props.handleClick).toHaveBeenCalledTimes(1);
  });

  it('renders the "show more" text', () => {
    expect(wrapper.debug()).toContain('more...');
  });

  it('renders the "show less" text', () => {
    wrapper.setProps({ isShowing: true });
    expect(wrapper.debug()).toContain('less...');
  });
});
