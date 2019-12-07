import React from 'react';
import { shallow } from 'enzyme';
import Faq from './faq.component';

const createProps = () => ({

});

describe('Faq', () => {
  it('renders', () => {
    const props = createProps();
    const wrapper = shallow(<Faq {...props} />);
    const element = wrapper.find('.faq');
    expect(element.exists()).toEqual(true);
  });
});
