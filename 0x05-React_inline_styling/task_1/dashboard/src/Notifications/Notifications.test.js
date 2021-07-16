/*
 * StyleSheetTestUtils.suppressStyleInjection()
 */

import React from 'react'
import { shallow } from 'enzyme'
import Notifications from './Notifications'
import NotificationItem from './NotificationItem'
import { getLatestNotification } from "../utils/utils"

const listNotifications = [
  {id: 1, type: 'default', value: 'New course available'},
  {id: 2, type: 'urgent', value: 'New resume available'},
  {id: 3, type: 'urgent', html: { __html: getLatestNotification() } },
];

describe('<Notifications />', () => {

  it('renders without crashing', () => {
    const wrapper = shallow(<Notifications />)
  	expect(wrapper.exists())
  });

  it('renders three list items', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />)
    expect(wrapper.find(NotificationItem).length).toEqual(3);
  });

  it('renders the correct text', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />)
    expect( wrapper.containsMatchingElement(<p>Here is the list of notifications</p>)).toBeTruthy()
  });

  it('first list item is correct', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />)
    expect(wrapper.find(NotificationItem).first().html()).toEqual('<li data-notification-type="default">New course available</li>');
  });

  it('menu item is being displayed when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications />)
    expect(wrapper.find('.menuItem').length).toEqual(1)
	});

  it('notifications is not being displayed when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications />)
    expect(wrapper.find('.Notifications').length).toEqual(0)
	});

  it('menu item is being displayed when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />)
    expect(wrapper.find('.menuItem').length).toEqual(1)
	});

  it('notifications is being displayed when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />)
    expect(wrapper.find('.Notifications').length).toEqual(1)
	});

});
