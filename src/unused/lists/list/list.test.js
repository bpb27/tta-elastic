import React from 'react';
import { shallow } from 'enzyme';
import List from './list.component';
import { byClass } from '../../../utils/enzyme';

const createProps = () => ({
  className: 'listicle',
  header: 'Hotdog-Colored Presidents',
});

describe('List', () => {
  it('renders', () => {
    const props = createProps();
    const wrapper = shallow(
      <List {...props}>
        <p>Trump</p>
      </List>
    );
    const element = wrapper.find(byClass('.list'));
    expect(element.exists()).toEqual(true);
  });

  it('adds a class name', () => {
    const props = createProps();
    const wrapper = shallow(
      <List {...props}>
        <p>Trump</p>
      </List>
    );
    const element = wrapper.find(byClass('.listicle'));
    expect(element.exists()).toEqual(true);
  });

  it('adds a button', () => {
    const props = createProps();
    const wrapper = shallow(
      <List {...props} button={<button>click</button>}>
        <p>Trump</p>
      </List>
    );
    const element = wrapper.find('button');
    expect(element.exists()).toEqual(true);
  });

  it('adds two buttons', () => {
    const props = createProps();
    const wrapper = shallow(
      <List {...props} button={<button>click</button>} buttonTwo={<button>click again</button>}>
        <p>Trump</p>
      </List>
    );
    const element = wrapper.find('button');
    expect(element.length).toEqual(2);
  });

  it('shows child content by default', () => {
    const props = createProps();
    const wrapper = shallow(
      <List {...props}>
        <p>Trump</p>
      </List>
    );
    const element = wrapper.find('p');
    expect(element.exists()).toEqual(true);
  });

  it('shows down arrow icon by default', () => {
    const props = createProps();
    const wrapper = shallow(
      <List {...props}>
        <p>Trump</p>
      </List>
    );
    const iconName = wrapper.find('Icon').props().name;
    expect(iconName).toEqual('MINUS_CIRCLE');
  });

  it('toggles to the up arrow icon', () => {
    const props = createProps();
    const wrapper = shallow(
      <List {...props}>
        <p>Trump</p>
      </List>
    );
    wrapper.find('Icon').simulate('click');
    const iconName = wrapper.find('Icon').props().name;
    expect(iconName).toEqual('PLUS_CIRCLE');
  });

  it('toggles showing the child content when clicked', () => {
    const props = createProps();
    const wrapper = shallow(
      <List {...props}>
        <p>Trump</p>
      </List>
    );
    expect(wrapper.find('p').exists()).toEqual(true);
    wrapper.find('Icon').simulate('click');
    expect(wrapper.find('p').exists()).toEqual(false);
    wrapper.find('Icon').simulate('click');
    expect(wrapper.find('p').exists()).toEqual(true);
  });
});
