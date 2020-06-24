import React from "react";

import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";

import { axios } from "axios";

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    axios
      .get("https://cannedmedical.herokuapp.com/user/signup")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log("Oh no, there is something wrong: ", err));
  }

  render() {
    return (
      <div className="sign-up-form">
        <form onSubmit={this.handleSubmit}>
          <CustomInput
            type="email"
            name="email"
            label="email"
            value={this.state.email}
            handleChange={this.handleChange}
            required
          />

          <CustomInput
            type="password"
            name="password"
            label="password"
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />

          <CustomButton type="submit">Sign Up</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
