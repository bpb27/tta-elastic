import React from 'react';
import { shallow } from 'enzyme';
import findTweet from 'utils/data';
import Placeholder from './placeholder.component';
import { byClass } from '../../utils/enzyme';

const createProps = () => ({
  className: 'fancy',
  placeholderHighlights: [],
  tweetData: findTweet('808638507161882624'),
});

describe('Placeholder', () => {
  it('renders', () => {
    const props = createProps();
    const wrapper = shallow(<Placeholder {...props} />);
    const element = wrapper.find(byClass('.placeholder'));
    expect(element.exists()).toEqual(true);
  });

  it('highlights', () => {
    const props = createProps();
    props.placeholderHighlights = ['Rex Tillerson'];
    const wrapper = shallow(<Placeholder {...props} />);
    expect(wrapper.html()).toContain('mark');
  });

  it('adds a class name', () => {
    const props = createProps();
    const wrapper = shallow(<Placeholder {...props} />);
    const element = wrapper.find('.fancy');
    expect(element.exists()).toEqual(true);
  });
});
