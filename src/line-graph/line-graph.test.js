import React from 'react';
import { shallow } from 'enzyme';
import LineGraph from './line-graph.component';

describe('LineGraph', () => {
  it('renders', () => {
    const wrapper = shallow(
      <LineGraph
        colors={['#7cb8ef', '#d66e6e', '#3799f1', '#d30002']}
        formatter={value => `$${(value / 1000).toFixed(2)} tril`}
        id="gdp"
        name="GDP"
        series={[
          {
            name: 'Clinton years',
            data: [
              { x: 1992, y: 4000 },
            ]
          }
        ]}
        source="https://tradingeconomics.com/united-states/gdp"
        title="US GDP 2000-2020"
      />
    );

    expect(wrapper.find('.lineGraph').exists()).toEqual(true);
    expect(wrapper.find('r').exists()).toEqual(true);
  });
});
