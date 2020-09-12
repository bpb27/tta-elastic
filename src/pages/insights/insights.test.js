import React from 'react';
import { shallow } from 'enzyme';
import Insights from './insights.component';

const createProps = () => ({

});

describe('Insights', () => {
  it('renders', () => {
    const props = createProps();
    const wrapper = shallow(<Insights {...props}/>);
    const element = wrapper.find('.insights');
    expect(element.exists()).toEqual(true);
  });
});
