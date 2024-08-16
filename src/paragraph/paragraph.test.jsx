import React from 'react';
import { shallow } from 'enzyme';
import Paragraph from './paragraph.component';
import { byClass } from '../utils/enzyme';

describe('Paragraph', () => {
  it('renders', () => {
    const wrapper = shallow(<Paragraph>Hello</Paragraph>);
    const element = wrapper.find(byClass('.paragraph'));
    expect(element.exists()).toEqual(true);
  });

  it('renders conclusion type', () => {
    const wrapper = shallow(<Paragraph type="conclusion">Hello</Paragraph>);
    const element = wrapper.find(byClass('.conclusion'));
    expect(element.exists()).toEqual(true);
  });

  it('renders quote type', () => {
    const wrapper = shallow(<Paragraph type="quote">Hello</Paragraph>);
    const element = wrapper.find(byClass('.quote'));
    expect(element.exists()).toEqual(true);
  });
});
