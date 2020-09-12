import React from 'react';
import { shallow } from 'enzyme';
import Collections from './collections.component';

const createProps = () => ({

});

describe.skip('Collections', () => {
  it('renders', () => {
    const props = createProps();
    const wrapper = shallow(<Collections {...props}/>);
    const element = wrapper.find('.collections');
    expect(element.exists()).toEqual(true);
  });
});
