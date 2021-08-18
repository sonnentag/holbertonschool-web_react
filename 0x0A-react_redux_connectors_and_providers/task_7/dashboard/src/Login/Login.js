import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      enableSubmit: false,
    };
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.checkFormContents = this.checkFormContents.bind(this);
  }

  handleLoginSubmit(event) {
    const { email, password } = this.state;
    this.props.logIn(email, password);
    event.preventDefault();
  }

  handleChangeEmail(event) {
    this.setState({email: event.target.value}, this.checkFormContents);
  }

  handleChangePassword(event) {
    this.setState({password: event.target.value}, this.checkFormContents);
  }

  checkFormContents() {
    if (this.state.email !== "" && this.state.password !== "") this.setState({ enableSubmit: true }); 
  }

  render() {
    return (
      <main className={css(styles.main)}>
        <p>Login to access the full dashboard</p>
        <form onSubmit={this.handleLoginSubmit}>
          <label htmlFor="email" className={css(styles.blockLabel)}>Email:</label>
          <input type="email" name="email" value={this.state.email} onChange={this.handleChangeEmail}/>
          <label htmlFor="password" className={css(styles.blockLabel)}>Password:</label>
          <input type="password" name="password" value={this.state.password} onChange={this.handleChangePassword}/>
	  {this.state.enableSubmit && <input type="submit" value="Submit"/>}
        </form>
      </main>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    margin: "48px",
    justifyContent: "center",
    '@media (max-width: 900px)': {
      margin: 0,
    },
  },
    blockLabel: {
      '@media (max-width: 900px)': {
      display: "block",
    },
  },
})

export default Login;
