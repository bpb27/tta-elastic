import React from 'react';
import { shallow } from 'enzyme';
import Metadata from './metadata.component';
import { byClass } from '../../../../utils/enzyme';

const createProps = () => ({
  date: 1603231782000,
  favorites: 1000,
  index: 1,
  isDeleted: false,
  onTwitterClick: vi.fn(),
  retweets: 2000,
  showTwitterView: false,
});

describe('Metadata', () => {
  let props;
  let wrapper;

  describe('renders', () => {
    beforeEach(() => {
      props = createProps();
      wrapper = shallow(<Metadata {...props} />);
    });

    test('container', () => {
      expect(wrapper.find(byClass('.metadata')).exists()).toEqual(true);
    });

    test('index', () => {
      expect(wrapper.find(byClass('.index')).text()).toContain('1.');
    });

    test('date', () => {
      expect(wrapper.find(byClass('TextSwitch')).props().web).toContain(
        'Oct 20th 2020 - 6:09:42 PM EST'
      );
      expect(wrapper.find(byClass('TextSwitch')).props().mobile).toContain('Oct 20 2020 - 6:09pm');
    });

    test('retweets', () => {
      expect(wrapper.find(byClass('.icons')).text()).toContain('2k');
    });

    test('retweets', () => {
      expect(wrapper.find(byClass('.icons')).text()).toContain('1k');
    });
  });

  describe('twitter button', () => {
    test('button text show', () => {
      props = { ...createProps(), showTwitterView: false };
      wrapper = shallow(<Metadata {...props} />);
      expect(wrapper.find(byClass('.icons')).text()).toContain('Show');
    });

    test('button text hide', () => {
      props = { ...createProps(), showTwitterView: true };
      wrapper = shallow(<Metadata {...props} />);
      expect(wrapper.find(byClass('.icons')).text()).toContain('Hide');
    });

    test('button text deleted', () => {
      props = { ...createProps(), isDeleted: true };
      wrapper = shallow(<Metadata {...props} />);
      expect(wrapper.find(byClass('.icons')).text()).toContain('Deleted');
    });

    test('button click calls handler', () => {
      props = { ...createProps(), showTwitterView: true };
      wrapper = shallow(<Metadata {...props} />);
      wrapper.find(byClass('.icons')).find('span').last().simulate('click');
      expect(props.onTwitterClick).toHaveBeenCalledTimes(1);
    });
  });
});
