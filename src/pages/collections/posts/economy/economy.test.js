import React from 'react';
import { shallow } from 'enzyme';
import Economy from './economy.component';

const createProps = () => ({

});

describe('Economy', () => {
  it('renders', () => {
    const props = createProps();
    const wrapper = shallow(<Economy {...props}/>);
    const element = wrapper.find('.economy');
    expect(element.exists()).toEqual(true);
  });
});
