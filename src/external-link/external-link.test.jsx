import React from 'react';
import { shallow } from 'enzyme';
import { tweetLink } from 'utils/links';
import ExternalLink from './external-link.component';
import { byClass } from '../utils/enzyme';

describe('ExternalLink', () => {
  it('renders', () => {
    const wrapper = shallow(<ExternalLink href="http://google.com">Google</ExternalLink>);
    const element = wrapper.find('a');
    expect(element.exists()).toEqual(true);
  });

  it('renders url', () => {
    const wrapper = shallow(<ExternalLink href="http://google.com">Google</ExternalLink>);
    const url = wrapper.find('a').props().href;
    expect(url).toEqual('http://google.com');
  });

  it('renders a url to a trump tweet if passed an id prop', () => {
    const wrapper = shallow(
      <ExternalLink className="link" tweetId="1">
        Some trump shit
      </ExternalLink>
    );
    const url = wrapper.find('a').props().href;
    expect(url).toEqual(tweetLink(1));
  });

  it('renders children', () => {
    const wrapper = shallow(<ExternalLink href="http://google.com">Google</ExternalLink>);
    const text = wrapper.find('a').text();
    expect(text).toEqual('Google');
  });

  it('adds class name', () => {
    const wrapper = shallow(
      <ExternalLink className="link" href="http://google.com">
        Google
      </ExternalLink>
    );
    const element = wrapper.find('.link');
    expect(element.exists()).toEqual(true);
  });

  it('adds a title for accessibility', () => {
    const wrapper = shallow(
      <ExternalLink className="link" href="http://google.com" title="A nice link">
        Google
      </ExternalLink>
    );
    const title = wrapper.props().title;
    expect(title).toEqual('A nice link');
  });
});
