import React from 'react';
import { shallow } from 'enzyme';
import { byClass } from 'utils/enzyme';
import App from './app.component';

describe('App', () => {
  it('renders', () => {
    const wrapper = shallow(<App />);
    const component = wrapper.find(byClass('.app'));
    expect(component.exists()).toEqual(true);
  });
});
