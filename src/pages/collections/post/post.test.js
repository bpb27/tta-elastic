import React from 'react';
import { shallow } from 'enzyme';
import Post from './post.component';

const createProps = () => ({

});

describe('Post', () => {
  it('renders', () => {
    const props = createProps();
    const wrapper = shallow(<Post {...props}/>);
    const element = wrapper.find('.post');
    expect(element.exists()).toEqual(true);
  });
});
