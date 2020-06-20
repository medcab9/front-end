import React from "react";

import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";

import { axios } from "axios";

class SignIn extends React.Component {
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
      .get("https://cannedmedical.herokuapp.com/user")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log("Oh no, there is something wrong: ", err));
  }

  return() {
    return (
      <div className="credentials">
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

          <CustomButton type="submit">Sign In</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
