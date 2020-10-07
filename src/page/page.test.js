import React from 'react';
import { shallow } from 'enzyme';
import Page from './page.component';

const createProps = () => ({
  className: 'search',
  tabTitle: 'Search',
  metaDescription: 'Instantly search',
  metaTitle: 'TTA',
});

describe('Page', () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = createProps();
    wrapper = shallow(<Page {...props}><p>Hello</p></Page>);
  });

  it('renders', () => {
    expect(wrapper.find('.page').exists()).toEqual(true);
    expect(wrapper.find('MetaTags').exists()).toEqual(true);
    expect(wrapper.find('p').exists()).toEqual(true);
  });

  it('adds a className', () => {
    expect(wrapper.find('.search').exists()).toEqual(true);
  });
});
