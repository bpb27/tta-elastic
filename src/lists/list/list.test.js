import React from 'react';
import { shallow } from 'enzyme';
import List from './list.component';

const createProps = () => ({
  className: 'listicle',
  header: 'Hotdog-Colored Presidents',
});

describe('List', () => {
  it('renders', () => {
    const props = createProps();
    const wrapper = shallow(<List {...props}><p>Trump</p></List>);
    const element = wrapper.find('.list');
    expect(element.exists()).toEqual(true);
  });

  it('adds a class name', () => {
    const props = createProps();
    const wrapper = shallow(<List {...props}><p>Trump</p></List>);
    const element = wrapper.find('.listicle');
    expect(element.exists()).toEqual(true);
  });

  it('shows child content by default', () => {
    const props = createProps();
    const wrapper = shallow(<List {...props}><p>Trump</p></List>);
    const element = wrapper.find('p');
    expect(element.exists()).toEqual(true);
  });

  it('shows down arrow icon by default', () => {
    const props = createProps();
    const wrapper = shallow(<List {...props}><p>Trump</p></List>);
    const iconName = wrapper.find('Icon').props().name;
    expect(iconName).toEqual('DOWN_ARROW');
  });

  it('toggles to the up arrow icon', () => {
    const props = createProps();
    const wrapper = shallow(<List {...props}><p>Trump</p></List>);
    wrapper.find('Icon').simulate('click');
    const iconName = wrapper.find('Icon').props().name;
    expect(iconName).toEqual('UP_ARROW');
  });

  it('toggles showing the child content when clicked', () => {
    const props = createProps();
    const wrapper = shallow(<List {...props}><p>Trump</p></List>);
    expect(wrapper.find('p').exists()).toEqual(true);
    wrapper.find('Icon').simulate('click');
    expect(wrapper.find('p').exists()).toEqual(false);
    wrapper.find('Icon').simulate('click');
    expect(wrapper.find('p').exists()).toEqual(true);
  });
});
