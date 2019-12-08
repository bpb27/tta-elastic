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

  it('toggles the embedded flag when the twitter icon is clicked', () => {
    const props = createProps();
    const wrapper = shallow(<LatestTweets {...props} />);
    const previousEmbeddedState = wrapper.state().embedded;
    wrapper.find('Button').simulate('click');
    const currentEmbeddedState = wrapper.state().embedded;
    expect(previousEmbeddedState).toEqual(false);
    expect(currentEmbeddedState).toEqual(true);
  });
});
