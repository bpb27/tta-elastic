import React from 'react';
import { shallow } from 'enzyme';
import Paragraph from './paragraph.component';

const createProps = () => ({

});

describe('Paragraph', () => {
  it('renders', () => {
    const props = createProps();
    const wrapper = shallow(<Paragraph {...props}/>);
    const element = wrapper.find('.paragraph');
    expect(element.exists()).toEqual(true);
  });
});
