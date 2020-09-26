import React from 'react';
import { shallow } from 'enzyme';
import TextSwitch from './text-switch.component';

const createProps = () => ({
  mobile: 'TTA',
  web: 'Trump Twitter Archive',
});

describe('TextSwitch', () => {
  it('renders', () => {
    const props = createProps();
    const wrapper = shallow(<TextSwitch {...props} />);
    expect(wrapper.find('.desktop').text()).toEqual(props.web);
    expect(wrapper.find('.mobile').text()).toEqual(props.mobile);
  });
});
