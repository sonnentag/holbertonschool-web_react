import React from 'react';
import './App.css';
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Notifications from "../Notifications/Notifications";
import CourseList from "../CourseList/CourseList";
import PropTypes from 'prop-types'

App.propTypes = {
  isLoggedIn: PropTypes.bool
};

App.defaultProps = {
  isLoggedIn: false
};

function App({ isLoggedIn }) {
  const listCourses = [ 
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2, name: 'Webpack', credit: 20 },
    { id: 3, name: 'React', credit: 40 }
  ];

  const listNotifications = [
    {id: 1, type: 'default', value: 'New course available'},
    {id: 2, type: 'urgent', value: 'New resume available'},
    {id: 3, type: 'urgent', html: getLatestNotification()}
  ];

  if (isLoggedIn) {
    const element = <CourseList listCourses={listCourses} />
  } else {
    const element = <Login />
  };
  return (
	  <>
		  <Notifications listNotifications={listNotifications} />
      <div className="App">
        <Header /> 
				{element}
        <Footer /> 
      </div>
		</>
  );
}

export default App;
