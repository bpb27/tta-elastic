import React from 'react';
import { shallow } from 'enzyme';
import { Past } from './past.component';
import { byClass } from '../../../utils/enzyme';

const createProps = () => ({
  history: {
    push: vi.fn(),
  },
});

describe('Past', () => {
  it('renders', () => {
    const props = createProps();
    const wrapper = shallow(<Past {...props} />);
    const element = wrapper.find(byClass('.page'));
    expect(element.exists()).toEqual(true);
  });
});
