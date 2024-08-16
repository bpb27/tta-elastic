import React from 'react';
import { shallow } from 'enzyme';
import Export from './export.component';

const createProps = () => ({
  close: vi.fn(),
  total: 100,
});

describe('Export', () => {
  it('renders', () => {
    const props = createProps();
    const wrapper = shallow(<Export {...props} />);
    const element = wrapper.find('Modal');
    expect(element.exists()).toEqual(true);
  });
});
