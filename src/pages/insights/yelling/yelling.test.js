import React from 'react';
import { shallow } from 'enzyme';
import { Yelling } from './yelling.component';

const createProps = () => ({
  history: {
    push: jest.fn(),
  },
});

describe('Yelling', () => {
  it('renders', () => {
    const props = createProps();
    const wrapper = shallow(<Yelling {...props}/>);
    const element = wrapper.find('.page');
    expect(element.exists()).toEqual(true);
  });
});
