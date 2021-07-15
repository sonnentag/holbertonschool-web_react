import React from 'react'
import { shallow } from 'enzyme'
import NotificationItem from './NotificationItem'

describe('<NotificationItem />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<NotificationItem />)
  	expect(wrapper.exists())
  });

  it("renders with correct type and value", () => {
    const wrapper = shallow(<NotificationItem type='default' value='test'/>);
		expect(wrapper.html()).toContain('<li data-notification-type="default">test</li>');
  });

  it("renders with correct html", () => {
    const wrapper = shallow(<NotificationItem html={{ __html: '<u>test</u>' }} />);
    expect(wrapper.html()).toContain('<u>test</u>');
  });

});

