import React from 'react';
import { shallow } from 'enzyme';
import LineGraph from './line-graph.component';
import { byClass } from '../utils/enzyme';

describe('LineGraph', () => {
  it('renders', () => {
    const wrapper = shallow(
      <LineGraph
        formatter={value => value}
        id="gdp"
        data={[{ x: 1992, y: 4000 }]}
        source="https://tradingeconomics.com/united-states/gdp"
        title="US GDP 2000-2020"
      />
    );

    expect(wrapper.find(byClass('.lineGraph')).exists()).toEqual(true);
    expect(wrapper.find('r').exists()).toEqual(true);
  });
});
