import React from "react";

import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";

import axios from "axios";

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
    axios
      .post("https://cannedmedical.herokuapp.com/auth/login", {username:this.state.username, password:this.state.password})
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log("Oh no, there is something wrong: ", err));
  }

  render() {
    return (
      <div className="credentials">
        <form onSubmit={this.handleSubmit}>
          <CustomInput
            type="username"
            name="username"
            label="username"
            value={this.state.username}
            onChange={this.handleChange}
            required
          />

          <CustomInput
            type="password"
            name="password"
            label="password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />

          <CustomButton type="submit">Sign In</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
