import React from 'react';
import { shallow } from 'enzyme';
import LatestTweets from './latest-tweets.component';

const createProps = () => ({});

describe('LatestTweets', () => {
  it('renders', () => {
    const props = createProps();
    const wrapper = shallow(<LatestTweets {...props} />);
    const element = wrapper.find('.latestTweets');
    expect(element.exists()).toEqual(true);
  });
});
