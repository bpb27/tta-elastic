import React from 'react';
import { shallow } from 'enzyme';
import LineGraph from './line-graph.component';

const createProps = () => ({

});

describe('LineGraph', () => {
  it('renders', () => {
    const props = createProps();
    const wrapper = shallow(<LineGraph {...props} />);
    const element = wrapper.find('.lineGraph');
    expect(element.exists()).toEqual(true);
  });
});
