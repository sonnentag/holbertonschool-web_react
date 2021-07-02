import React from 'react'
import { shallow } from 'enzyme'
import Notifications from './Notifications'

const wrapper = shallow(<Notifications />)

it('renders without crashing', () => {
	expect(wrapper.exists())
});

it('renders three list items', () => {
  expect(wrapper.find('li').children().length).toEqual(3)
});

it('renders the correct text', () => {
  expect( wrapper.containsMatchingElement(<p>Here is the list of notifications</p>)).toBeTruthy()
});
