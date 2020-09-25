import React from 'react';
import { shallow } from 'enzyme';
import SexualAssault from './sexual-assault.component';

const createProps = () => ({

});

describe('SexualAssault', () => {
  it('renders', () => {
    const props = createProps();
    const wrapper = shallow(<SexualAssault {...props}/>);
    const element = wrapper.find('.sexualAssault');
    expect(element.exists()).toEqual(true);
  });
});
