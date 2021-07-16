import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

describe('<Login />', () => {
  it('Login renders without crashing', () => {
    const wrapper = shallow(<Login />)
    expect(wrapper.exists())
  });

  it('Login renders 2 input and 2 label tags', () => {
    const wrapper = shallow(<Login />)
    expect(wrapper.find('input')).toHaveLength(2)
    expect(wrapper.find('label')).toHaveLength(2)
  });
});
