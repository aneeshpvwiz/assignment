import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link, Redirect } from "react-router-dom";
import { login } from "../../actions/auth";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  static propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.login(this.state.username, this.state.password);
  };

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/" />;
    }
    const { username, password } = this.state;

    return (
      <div>
        <h2>Login</h2>
        <form className="form-inline" onSubmit={this.onSubmit}>
          <label>Username:</label>
          <input
            type="text"
            placeholder="Enter username"
            className="form-control"
            name="username"
            onChange={this.onChange}
            value={username}
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter password"
            className="form-control"
            name="password"
            onChange={this.onChange}
            value={password}
          />

          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { login }
)(Login);
