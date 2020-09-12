import React from 'react';
import { shallow } from 'enzyme';
import Frequency from './frequency.component';

const createProps = () => ({

});

describe('Frequency', () => {
  it('renders', () => {
    const props = createProps();
    const wrapper = shallow(<Frequency {...props}/>);
    const element = wrapper.find('.frequency');
    expect(element.exists()).toEqual(true);
  });
});
