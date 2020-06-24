import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo-transparent.png";
import "./Header.styles.scss";

const Header = () => {
  return (
    <nav className="uk-navbar uk-dark uk-navbar-container header" uk-navbar>
      <div className="uk-navbar-left">
        <img className="logo" src={logo} alt="logo cann medical" />
      </div>
      <div className="uk-navbar-right">
        <ul class="uk-navbar-nav">
          <li>
            <Link className="link" to="/recommendations">Recommendations</Link>
          </li>
          <li>
            <Link className="link" to="/strains">Strains</Link>
          </li>
          <li>
            <Link className="link" to="/">Sign In</Link>
          </li>
          <li>
            <Link className="link" to="/signup">Sign Up</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
