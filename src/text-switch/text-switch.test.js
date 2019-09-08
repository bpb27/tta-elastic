import React from 'react';
import { shallow } from 'enzyme';
import TextSwitch from './text-switch.component';

const createProps = () => ({
  mobile: 'TTA',
  size: 700,
  web: 'Trump Twitter Archive',
});

describe('TextSwitch', () => {
  it('renders full web text', () => {
    global.innerWidth = 1000;
    const props = createProps();
    const wrapper = shallow(<TextSwitch {...props} />);
    expect(wrapper.text()).toEqual(props.web);
  });

  it('renders shorter mobile text', () => {
    global.innerWidth = 600;
    const props = createProps();
    const wrapper = shallow(<TextSwitch {...props} />);
    expect(wrapper.text()).toEqual(props.mobile);
  });
});
