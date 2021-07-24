/**
 * @jest-environment jsdom
 */

import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';

describe('<App />', () => {
  it('App renders without crashing', () => {
    shallow(<App />)
  });

  it('contains a <Footer /> component', () => {
    shallow(<Footer />)
	});

  it('contains a <Header /> component', () => {
    shallow(<Header />)
  });

  it('contains a <Login /> component', () => {
    shallow(<Login />)
  });

  it('contains a <Notifications /> component', () => {
    shallow(<Notifications />)
  });

  it('check that CourseList is not displayed', () => {
	  const wrapper = shallow(<App />);
    expect(wrapper.find(CourseList).length).toEqual(0);
  });

  it('verify included component when isLoggedIn is true', () => {
    const wrapper = shallow(<App isLoggedIn={true}/>);
    expect(wrapper.find(Login).length).toEqual(0);
    expect(wrapper.find(CourseList).length).toEqual(1);
	});
});
