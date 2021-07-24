import React from 'react';
import logo from '../assets/hlogo.jpg';
import './Header.css';

function Header() {
  return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="Holberton logo" />
			  <h1>School dashboard</h1>
      </header>
  );
}

export default Header;
