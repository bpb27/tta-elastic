import React from 'react';
import { shallow } from 'enzyme';
import GdpQuarterly from './gdp-quarterly.component';

const createProps = () => ({

});

describe('GdpQuarterly', () => {
  it('renders', () => {
    const props = createProps();
    const wrapper = shallow(<GdpQuarterly {...props} />);
    const element = wrapper.find('.gdpQuarterly');
    expect(element.exists()).toEqual(true);
  });
});
