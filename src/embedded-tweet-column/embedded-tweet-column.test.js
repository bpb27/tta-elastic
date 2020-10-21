import React from 'react';
import { shallow } from 'enzyme';
import EmbeddedTweetColumn from './embedded-tweet-column.component';

const createProps = () => ({

});

describe('EmbeddedTweetColumn', () => {
  it('renders', () => {
    const props = createProps();
    const wrapper = shallow(<EmbeddedTweetColumn {...props}/>);
    const element = wrapper.find('.embeddedTweetColumn');
    expect(element.exists()).toEqual(true);
  });
});
