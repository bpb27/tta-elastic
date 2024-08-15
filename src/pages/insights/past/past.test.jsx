import React from 'react';
import { shallow } from 'enzyme';
import { Past } from './past.component';

const createProps = () => ({
  history: {
    push: jest.fn(),
  },
});

describe('Past', () => {
  it('renders', () => {
    const props = createProps();
    const wrapper = shallow(<Past {...props}/>);
    const element = wrapper.find('.page');
    expect(element.exists()).toEqual(true);
  });
});
