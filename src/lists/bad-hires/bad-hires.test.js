import React from 'react';
import { shallow } from 'enzyme';
import BadHires from './bad-hires.component';

const createProps = () => ({

});

describe('BadHires', () => {
  it('renders', () => {
    const props = createProps();
    const wrapper = shallow(<BadHires {...props} />);
    const element = wrapper.find('.badHires');
    expect(element.exists()).toEqual(true);
  });
});
