import React from 'react';
import { shallow } from 'enzyme';
import NewsLink from './news-link.component';

const createProps = () => ({
  href: 'www.cnn.com/news',
  linkText: 'I am the best president since Taft',
  preText: 'Trump claims',
});

describe('NewsLink', () => {
  it('renders', () => {
    const props = createProps();
    const wrapper = shallow(<NewsLink {...props} />);
    const element = wrapper.find('.newsLink');
    expect(element.exists()).toEqual(true);
  });
});
