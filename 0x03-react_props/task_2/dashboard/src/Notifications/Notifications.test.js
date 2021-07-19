import React from 'react'
import { shallow } from 'enzyme'
import Notifications from './Notifications'
import NotificationItem from './NotificationItem'


describe('<Notifications />', () => {
  const wrapper = shallow(<Notifications />)

  it('renders without crashing', () => {
  	expect(wrapper.exists())
  });

  it('renders three list items', () => {
    expect(wrapper.find(NotificationItem).length).toEqual(3);
  });

  it('renders the correct text', () => {
    expect( wrapper.containsMatchingElement(<p>Here is the list of notifications</p>)).toBeTruthy()
  });

  it('first list item is correct', () => {
    expect(wrapper.find(NotificationItem).first().html()).toEqual('<li data-notification-type="default">New course available</li>');
  });
});
