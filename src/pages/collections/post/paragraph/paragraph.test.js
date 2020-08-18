import React from 'react';
import { shallow } from 'enzyme';
import Paragraph from './paragraph.component';

describe('Paragraph', () => {
  it('renders', () => {
    const wrapper = shallow(<Paragraph>Hello</Paragraph>);
    const element = wrapper.find('.paragraph');
    expect(element.exists()).toEqual(true);
  });

  it('renders conclusion type', () => {
    const wrapper = shallow(<Paragraph type="conclusion">Hello</Paragraph>);
    const element = wrapper.find('.conclusion');
    expect(element.exists()).toEqual(true);
  });

  it('renders quote type', () => {
    const wrapper = shallow(<Paragraph type="quote">Hello</Paragraph>);
    const element = wrapper.find('.quote');
    expect(element.exists()).toEqual(true);
  });
});
