import React from 'react';
import { shallow } from 'enzyme';
import Dog from './dog.component';

const createProps = () => ({

});

describe('Dog', () => {
  it('renders', () => {
    const props = createProps();
    const wrapper = shallow(<Dog {...props} />);
    const element = wrapper.find('.listDog');
    expect(element.exists()).toEqual(true);
  });
});
