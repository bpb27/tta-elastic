import React from 'react';
import { shallow } from 'enzyme';
import LatestTweet from './latest-tweet.component';

const createProps = () => ({

});

describe('LatestTweet', () => {
  it('renders', () => {
    const props = createProps();
    const wrapper = shallow(<LatestTweet {...props} />);
    const element = wrapper.find('.latestTweet');
    expect(element.exists()).toEqual(true);
  });
});
