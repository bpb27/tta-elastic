import React from 'react';
import { shallow } from 'enzyme';
import TextSwitch from './text-switch.component';
import { byClass } from 'utils/enzyme';

const createProps = () => ({
  mobile: 'TTA',
  web: 'Trump Twitter Archive',
});

describe('TextSwitch', () => {
  it('renders', () => {
    const props = createProps();
    const wrapper = shallow(<TextSwitch {...props} />);
    expect(wrapper.find(byClass('.desktop')).text()).toEqual(props.web);
    expect(wrapper.find(byClass('.mobile')).text()).toEqual(props.mobile);
  });
});
