import React, { Component } from "react";
import LoginBody from "./LoginBody";
import LoginImage from "./LoginImage";
import "./login.scss";

export class Login extends Component {
  render() {
    return (
      <div className="login-page">
        <LoginImage />
        <LoginBody />
      </div>
    );
  }
}

export default Login;
