import React from 'react';
import { shallow } from 'enzyme';
import { byClass } from 'utils/enzyme';
import EmbeddedTweetColumn from './embedded-tweet-column.component';

const createProps = () => ({
  children: <p>Hello</p>,
  header: 'Sup',
});

describe('EmbeddedTweetColumn', () => {
  let props;
  let wrapper;

  describe('renders', () => {
    beforeEach(() => {
      props = createProps();
      wrapper = shallow(<EmbeddedTweetColumn {...props} />);
    });

    test('container', () => {
      expect(wrapper.find(byClass('.embeddedTweetColumn')).exists()).toEqual(true);
    });

    test('children', () => {
      expect(wrapper.find('p').exists()).toEqual(true);
    });
  });

  describe('header', () => {
    it('renders if prop passed', () => {
      props = { ...createProps(), header: 'Hello' };
      wrapper = shallow(<EmbeddedTweetColumn {...props} />);
      expect(wrapper.find('h1').exists()).toEqual(true);
      expect(wrapper.find('h1').text()).toEqual(props.header);
    });

    it('does not render if no prop passed', () => {
      props = { ...createProps(), header: undefined };
      wrapper = shallow(<EmbeddedTweetColumn {...props} />);
      expect(wrapper.find('h1').exists()).toEqual(false);
    });
  });
});
