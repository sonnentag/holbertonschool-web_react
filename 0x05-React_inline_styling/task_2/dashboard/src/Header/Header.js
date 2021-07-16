import React from 'react';
import logo from '../assets/hlogo.jpg';
import { StyleSheet, css } from 'aphrodite';

function Header() {
  return (
      <header className={css(styles.header)}>
        <img src={logo} className={css(styles.logo)} alt="Holberton logo" />
			  <h1>School dashboard</h1>
      </header>
  );
}

const styles = StyleSheet.create({
  header: {
    width: 100%;
    display: flex;
    align-items: center;
    color: #DF344B ;
    border-bottom: 4px solid #DF344B; 
    margin: 0;
  },

  logo: {
    width: 225px;
  }
})

export default Header;
