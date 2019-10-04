import React from 'react';
import { shallow } from 'enzyme';
import Hypocrisy from './hypocrisy.component';

const createProps = () => ({

});

describe('Hypocrisy', () => {
  it('renders', () => {
    const props = createProps();
    const wrapper = shallow(<Hypocrisy {...props} />);
    const element = wrapper.find('.hypocrisy');
    expect(element.exists()).toEqual(true);
  });
});
