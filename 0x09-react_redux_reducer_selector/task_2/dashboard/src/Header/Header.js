import React, { Component } from 'react';
import logo from '../assets/hlogo.jpg';
import { StyleSheet, css } from 'aphrodite';
import AppContext from '../App/AppContext';

class Header extends Component {
  render() {
    return (
      <>
        <header className={css(styles.header)}>
          <img src={logo} className={css(styles.logo)} alt="Holberton logo" />
          <h1>School dashboard</h1>
          { this.context.user.isLoggedIn && <p id="logoutSection">Welcome {this.context.user.email} <a onClick={this.context.logOut}>logOut</a></p> }
        </header>
      </>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    color: "#DF344B",
    borderBottom: "4px solid #DF344B",
    margin: 0,
  },

  logo: {
    width: "225px"
  }
})

Header.contextType = AppContext;

export default Header;
