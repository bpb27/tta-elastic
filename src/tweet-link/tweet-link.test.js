import React from 'react';
import { shallow } from 'enzyme';
import findTweet from 'utils/data';
import TweetLink from './tweet-link.component';

describe('TweetLink', () => {
  let element;
  let props;
  let wrapper;
  const className = 'stylishTweet';
  const tweetData = findTweet('808638507161882624');

  beforeEach(() => {
    props = { className, tweetData, type: 'text' };
    wrapper = shallow(<TweetLink {...props}>Lies!</TweetLink>);
    element = wrapper.find('ExternalLink');
  });

  it('renders the text type by default', () => {
    wrapper = shallow((
      <TweetLink tweetData={tweetData}>
        Lies!
      </TweetLink>
    ));
    expect(wrapper.find('ExternalLink').exists()).toEqual(true);
  });

  describe('embed type', () => {
    beforeEach(() => {
      props = { className, tweetData, type: 'embed' };
      wrapper = shallow(<TweetLink {...props} />);
    });

    it('renders the visibility sensor by default', () => {
      expect(wrapper.find('VisibilitySensor').exists()).toEqual(true);
    });

    it('adds a class name', () => {
      expect(wrapper.find('.stylishTweet').exists()).toEqual(true);
    });

    describe('visible', () => {
      beforeEach(() => {
        wrapper.setState({ isVisible: true });
        element = wrapper.find('TwitterTweetEmbed');
      });

      it('renders the embedded tweet', () => {
        expect(element.exists()).toEqual(true);
      });

      it('forwards the tweet id', () => {
        expect(element.props().tweetId).toEqual(props.tweetData.id);
      });
    });
  });

  describe('placeholder type', () => {
    beforeEach(() => {
      props = {
        className,
        placeholderHighlights: ['Rex'],
        tweetData,
        type: 'placeholder',
      };
      wrapper = shallow(<TweetLink {...props} />);
      element = wrapper.find('Placeholder');
    });

    it('renders', () => {
      expect(element.exists()).toEqual(true);
    });

    it('adds a class name', () => {
      expect(wrapper.find('.stylishTweet').exists()).toEqual(true);
    });

    it('forwards the tweet data', () => {
      expect(element.props().tweetData).toEqual(props.tweetData);
    });

    it('forwards the placeholder highlights', () => {
      expect(element.props().placeholderHighlights).toEqual(props.placeholderHighlights);
    });
  });

  describe('text type', () => {
    beforeEach(() => {
      props = { className, tweetData, type: 'text' };
      wrapper = shallow(<TweetLink {...props}>Lies!</TweetLink>);
      element = wrapper.find('ExternalLink');
    });

    it('renders', () => {
      expect(element.exists()).toEqual(true);
    });

    it('adds a class name', () => {
      expect(wrapper.find('.stylishTweet').exists()).toEqual(true);
    });

    it('forwards the tweet id', () => {
      expect(element.props().tweetId).toEqual(props.tweetData.id);
    });

    it('renders children', () => {
      expect(wrapper.html()).toContain('Lies!');
    });
  });
});
