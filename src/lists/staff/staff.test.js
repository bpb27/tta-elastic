import React from 'react';
import { shallow } from 'enzyme';
import Staff from './staff.component';

const createProps = () => ({

});

describe('Staff', () => {
  it('renders', () => {
    const props = createProps();
    const wrapper = shallow(<Staff {...props} />);
    const element = wrapper.find('.staff');
    expect(element.exists()).toEqual(true);
  });
});
