import React from "react";
import { Link, withRouter } from "react-router-dom";

import { axiosWithAuth } from "../utils/AxiosWithAuth";
import * as yup from "yup";

import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";

// import axios from "axios";

class SignIn extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
      errors: {
        username: "",
        password: "",
      },
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  passwordValidator = "^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[a-zA-Zd]{8,}$";

  formSchema = yup.object().shape({
    username: yup
      .string()
      .min(3, "Your username must have at least 3 characters.")
      .required("Username is required."),
    password: yup
      .string()
      .matches(
        this.passwordValidator,
        "Minimum eight characters, at least one uppercase letter, one lowercase letter and one number."
      )
      .required("Password is required."),
  });

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
        localStorage.setItem("token", res.data.token);
        this.props.history.push("/userprofile");
      })
      .catch((err) => console.log("Oh no, there is something wrong: ", err));
  }

  validationOnChange = (e) => {
    yup
      .reach(this.formSchema, e.target.name)
      .validate(e.target.value)
      .then((inputIsValid) => {
        this.setState.errors({
          username: "",
          password: "",
          // [e.target.name]: "",
        });
      })
      .catch((err) => {
        this.setState.errors.username = err.errors[0];
        this.setState.errors.passwrod = err.errors[0];
      });
  };

  render() {
    return (
      <div className="uk-card uk-card-default uk-card-body uk-padding-large uk-child-width-auto uk-margin uk-container">
        <h3 className="uk-card-title">Sign In</h3>
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
          { this.state.errors.username > 0 ? <p className="error-message">Please, type your Username</p> : null }

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
          { this.state.errors.password > 0 ? <p className="error-message">Please, type your Username</p> : null }

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
