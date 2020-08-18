import React from 'react';
import { shallow } from 'enzyme';
import Post from './post.component';

const createProps = () => ({
  className: 'economy',
  date: 'August 1st, 2020',
  title: 'Trump Economy',
});

describe('Post', () => {
  it('renders', () => {
    const props = createProps();
    const wrapper = shallow(<Post {...props}><p/></Post>);
    expect(wrapper.find('.economy').exists()).toEqual(true);
    expect(wrapper.find('p').exists()).toEqual(true);
  });
});
