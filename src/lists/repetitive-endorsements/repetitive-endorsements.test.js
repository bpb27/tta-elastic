import React from 'react';
import { shallow } from 'enzyme';
import RepetitiveEndorsements from './repetitive-endorsements.component';

const createProps = () => ({

});

describe('RepetitiveEndorsements', () => {
  it('renders', () => {
    const props = createProps();
    const wrapper = shallow(<RepetitiveEndorsements {...props} />);
    const element = wrapper.find('.repetitiveEndorsements');
    expect(element.exists()).toEqual(true);
  });
});
