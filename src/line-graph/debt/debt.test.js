import React from 'react';
import { shallow } from 'enzyme';
import Debt from './debt.component';

const createProps = () => ({

});

describe('Debt', () => {
  it('renders', () => {
    const props = createProps();
    const wrapper = shallow(<Debt {...props} />);
    const element = wrapper.find('.debt');
    expect(element.exists()).toEqual(true);
  });
});
