import React, { Component, PropTypes } from 'react';

export default class LoginForm extends Component {
  static propTypes = {
    submitLogin: PropTypes.func.isRequired,
    username: PropTypes.string,
    password: PropTypes.string
  };
  constructor() {
    super(...arguments);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(e) {
    e.preventDefault();
    this.props.submitLogin(
      this.refs.username.value,
      this.refs.password.value,
    );
  }
  render() {
    const { submitLogin, username, password } = this.props;
    return (
      <form name="loginForm" onSubmit={this.onSubmit}>
        <div>
          <label htmlFor="username">email</label>
          <input type="email" required id="username" ref="username" value={username} />
        </div>
        <div>
          <label>password</label>
          <input type="password" id="passowrd" required ref="password" value={password} />
        </div>
        <button type="submit">Login</button>
      </form>
    );
  }
}
