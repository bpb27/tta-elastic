import React from 'react';
import { shallow } from 'enzyme';
import Past from './past.component';

const createProps = () => ({

});

describe('Past', () => {
  it('renders', () => {
    const props = createProps();
    const wrapper = shallow(<Past {...props}/>);
    const element = wrapper.find('.past');
    expect(element.exists()).toEqual(true);
  });
});
