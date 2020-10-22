import React from 'react';
import { shallow } from 'enzyme';
import OldSearch from './old-search.component';

const createProps = () => ({

});

describe('OldSearch', () => {
  it('renders', () => {
    const props = createProps();
    const wrapper = shallow(<OldSearch {...props}/>);
    const element = wrapper.find('.oldSearch');
    expect(element.exists()).toEqual(true);
  });
});
