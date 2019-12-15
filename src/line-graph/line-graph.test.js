import React from 'react';
import { shallow } from 'enzyme';
import LineGraph from './line-graph.component';

const createProps = () => ({
  data: [
    { value: 1, year: 2018 },
    { value: 2, year: 2019 },
  ],
  formatter: value => `$${value} tril`,
  id: 'gdp',
  name: 'GDP',
  title: 'US GDP 2018-2019',
});

describe('LineGraph', () => {
  it('renders', () => {
    const props = createProps();
    const wrapper = shallow(<LineGraph {...props} />);
    const element = wrapper.find('.lineGraph');
    expect(element.exists()).toEqual(true);
  });
});
