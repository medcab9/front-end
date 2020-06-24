import React from "react";

import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";

import axios from "axios";

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
      .post("https://cannedmedical.herokuapp.com/auth/register", {email:this.state.email, username:this.state.username, password:this.state.password})
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log("Oh no, there is something wrong: ", err.response));
  }

  render() {
    return (
      <div className="sign-up-form">
        <form onSubmit={this.handleSubmit}>
          {console.log(this.state)}
          <CustomInput
            type="email"
            name="email"
            label="email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />

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

          <CustomButton type="submit">Sign Up</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
