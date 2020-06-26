import React from "react";

import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";

import axios from "axios";
import { Link } from "react-router-dom";

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      email: "",
      username: "",
      password: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    axios
      .post("https://cannedmedical.herokuapp.com/auth/register", {
        email: this.state.email,
        username: this.state.username,
        password: this.state.password,
      })
      .then((res) => {
        console.log(res.data);
        this.props.history.push("/userprofile");
      })
      .catch((err) =>
        console.log("Oh no, there is something wrong: ", err.response)
      );
  }

  render() {
    return (
      <div class="uk-card uk-card-default uk-card-body uk-padding-large uk-child-width-auto uk-margin uk-container">
        <h3 class="uk-card-title">Sign up</h3>
        <form onSubmit={this.handleSubmit}>
          {console.log(this.state)}
          <CustomInput
            className="uk-margin-small uk-search-input"
            type="email"
            name="email"
            label="email"
            value={this.state.email}
            onChange={this.handleChange}
            placeholder="Email"
            style={{borderBottom: "1px solid green"}}
            required
          />

          <CustomInput
            className="uk-margin-small uk-search-input"
            type="username"
            name="username"
            label="username"
            value={this.state.username}
            onChange={this.handleChange}
            placeholder="Username"
            style={{borderBottom: "1px solid green"}}
            required
          />

          <CustomInput
            className="uk-margin-small uk-search-input"
            type="password"
            name="password"
            label="password"
            value={this.state.password}
            onChange={this.handleChange}
            placeholder="Password"
            style={{borderBottom: "1px solid green"}}
            required
          />

          <CustomButton className="uk-button uk-button-default uk-margin-small" type="submit">
            Sign Up
          </CustomButton>
        </form>
        <span>
          Already registered: <Link to="/">Sign In</Link>
        </span>
      </div>
    );
  }
}

export default SignUp;
