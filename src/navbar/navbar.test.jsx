import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import { Navbar } from './navbar.component';
import { byClass } from '../utils/enzyme';

const createProps = () => ({
  location: {
    pathname: '/search',
  },
});

describe('Navbar', () => {
  it('renders', () => {
    const props = createProps();
    const wrapper = mount(
      <BrowserRouter>
        <Navbar {...props} />
      </BrowserRouter>
    );
    const element = wrapper.find(byClass('.navbar'));
    expect(element.exists()).toEqual(true);
  });
});
