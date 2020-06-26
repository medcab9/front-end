import React from "react";
import { Link } from "react-router-dom";

import { axiosWithAuth} from "../utils/AxiosWithAuth"

import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";

// import axios from "axios";

class SignIn extends React.Component {
  constructor() {
    super();

    this.state = {
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
    axiosWithAuth()
      .post("https://cannedmedical.herokuapp.com/auth/login", {
        username: this.state.username,
        password: this.state.password,
      })
      .then((res) => {
        localStorage.setItem('token', res.data.token);
        this.props.history.push("/userprofile");
      })
      .catch((err) => console.log("Oh no, there is something wrong: ", err));
     
  }

  render() {
    return (
      <div className="uk-card uk-card-default uk-card-body uk-padding-large	uk-width-1-2 uk-margin uk-container">
        <h3 class="uk-card-title">Sign In</h3>
        <form onSubmit={this.handleSubmit}>
          <CustomInput
            className="uk-margin-small uk-search-input"
            type="username"
            name="username"
            label="username"
            value={this.state.username}
            onChange={this.handleChange}
            placeholder="Username"
            style={{ borderBottom: "1px solid green" }}
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
            style={{ borderBottom: "1px solid green" }}
            required
          />

          <CustomButton
            className="uk-button uk-button-default uk-margin-small"
            type="submit"
          >
            Sign In
          </CustomButton>
        </form>
        <span>
          Don't have an account yet: <Link to="/signup">Sign Up</Link>
        </span>
      </div>
    );
  }
}

export default SignIn;
