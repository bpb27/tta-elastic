import React from 'react';
import { shallow } from 'enzyme';
import ExternalLink from './external-link.component';

describe('ExternalLink', () => {
  it('renders', () => {
    const wrapper = shallow(
      <ExternalLink href="http://google.com">Google</ExternalLink>
    );
    const element = wrapper.find('a');
    expect(element.exists()).toEqual(true);
  });

  it('renders url', () => {
    const wrapper = shallow(
      <ExternalLink href="http://google.com">Google</ExternalLink>
    );
    const url = wrapper.find('a').props().href;
    expect(url).toEqual('http://google.com');
  });

  it('renders children', () => {
    const wrapper = shallow(
      <ExternalLink href="http://google.com">Google</ExternalLink>
    );
    const text = wrapper.find('a').text();
    expect(text).toEqual('Google');
  });

  it('adds class name', () => {
    const wrapper = shallow(
      <ExternalLink className="link" href="http://google.com">Google</ExternalLink>
    );
    const element = wrapper.find('.link');
    expect(element.exists()).toEqual(true);
  });
});
