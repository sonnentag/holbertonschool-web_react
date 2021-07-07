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
  if (isLoggedIn) {
    const element = <CourseList />
  } else {
    const element = <Login />
  }
  return (
	  <>
		  <Notifications />
      <div className="App">
        <Header /> 
				{element}
        <Footer /> 
      </div>
		</>
  );
}

export default App;
