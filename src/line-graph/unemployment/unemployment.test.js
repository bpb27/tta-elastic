import React from 'react';
import { shallow } from 'enzyme';
import Unemployment from './unemployment.component';

const createProps = () => ({

});

describe('Unemployment', () => {
  it('renders', () => {
    const props = createProps();
    const wrapper = shallow(<Unemployment {...props} />);
    const element = wrapper.find('.unemployment');
    expect(element.exists()).toEqual(true);
  });
});
