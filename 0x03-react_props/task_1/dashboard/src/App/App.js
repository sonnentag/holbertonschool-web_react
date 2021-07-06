import React from 'react';
import './App.css';
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Notifications from "../Notifications/Notifications";

function App() {
  return (
	  <>
		  <Notifications />
      <div className="App">
        <Header /> 
        <Login /> 
        <Footer /> 
      </div>
		</>
  );
}

export default App;
