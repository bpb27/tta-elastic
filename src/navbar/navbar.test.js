import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './navbar.component';

describe('Navbar', () => {
  it('renders', () => {
    const wrapper = mount((
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    ));
    const element = wrapper.find('.navbar');
    expect(element.exists()).toEqual(true);
  });
});
