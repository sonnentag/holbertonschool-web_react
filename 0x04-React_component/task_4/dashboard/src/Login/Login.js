import React from 'react';
import './Login.css';

function Login() {
  return (
	  <>
      <main className="App-body">
        <p>Login to access the full dashboard</p>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email"/>
        <label for="pwd">Password:</label>
        <input type="password" id="pwd" name="pwd"/>
        <button type='button'>OK</button>
      </main>
	  </>
  );
}

export default Login;
