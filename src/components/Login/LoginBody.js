import React, { Component } from "react";
import { connect } from "react-redux";
import { loginUser } from "../../actions";

export class LoginBody extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.state = {
      username: "",
      password: "",
    };
  }

  componentDidMount() {
    this.inputRef.current.focus();
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.loginUser(this.state);
  };

  inputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div className="login-body-container">
        <div className="wrapper">
          <p className="header">Let's Get Started</p>
          <form className="form" onSubmit={this.onSubmit}>
            <input
              type="email"
              name="username"
              value={this.state.username}
              ref={this.inputRef}
              onChange={this.inputChange}
              placeholder="Email"
            />
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.inputChange}
              placeholder="Password"
            />
            <button type="submit">SIGN IN</button>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  loginUser: (state) => dispatch(loginUser(state)),
});

export default connect(null, mapDispatchToProps)(LoginBody);
