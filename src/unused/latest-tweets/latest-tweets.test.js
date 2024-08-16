import React from 'react';
import { shallow } from 'enzyme';
import LatestTweets from './latest-tweets.component';
import { byClass } from '../../utils/enzyme';

const createProps = () => ({});

describe('LatestTweets', () => {
  it('renders', () => {
    const props = createProps();
    const wrapper = shallow(<LatestTweets {...props} />);
    const element = wrapper.find(byClass('.latestTweets'));
    expect(element.exists()).toEqual(true);
  });

  // need to mount, but no way to mock reactive base
  it.skip('toggles the embedded flag when the button is clicked', () => {
    const props = createProps();
    const wrapper = shallow(<LatestTweets {...props} />);
    const previousEmbeddedState = wrapper.state().embedded;
    wrapper.find('Button').simulate('click');
    const currentEmbeddedState = wrapper.state().embedded;
    expect(previousEmbeddedState).toEqual(false);
    expect(currentEmbeddedState).toEqual(true);
  });

  // need to mount, but no way to mock reactive base
  it.skip('toggles the embedded button text', () => {
    const props = createProps();
    const wrapper = shallow(<LatestTweets {...props} />);
    const previousText = wrapper.find('Button').debug();
    wrapper.find('Button').simulate('click');
    const currentText = wrapper.find('Button').debug();
    expect(previousText).toContain('tweet');
    expect(currentText).toContain('text');
  });
});
