import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo-transparent.png";
import "./Header.styles.scss";

const Header = () => {
  const token = localStorage.getItem("token");
  console.log('token: ', token);
  return (
    <nav className="uk-navbar uk-dark header uk-column-1-2@s">
      <div className="uk-navbar-left">
        <a href="/" className="uk-navbar-item uk-logo">
          <img className="logo" src={logo} alt="logo cann medical" />
        </a>
      </div>
      <div className="uk-navbar-right navbar-right-side">
        <ul className="uk-navbar-nav">
          <li>
            <Link className="link" to="/recommendations">
              Recommendations
            </Link>
          </li>
          {token ? (
            <li>
              <Link className="link" to="/strains">
                Strains
              </Link>
            </li>
          ) : null}
          <li>
            <Link className="link" to="/">
              Sign In
            </Link>
          </li>
          <li>
            <Link className="link" to="/signup">
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-right-side-mobile">
        <ul uk-accordion="collapsible: true">
          <li>
            <a className="uk-accordion-title" href="#">
              <span uk-icon="menu"></span>
            </a>
            <div className="uk-accordion-content uk-align-right">
              <ul className="uk-nav navbar-background">
                <li>
                  <Link className="link" to="/recommendations">
                    Recommendations
                  </Link>
                </li>
                <li>
                  <Link className="link" to="/strains">
                    Strains
                  </Link>
                </li>
                <li>
                  <Link className="link" to="/">
                    Sign In
                  </Link>
                </li>
                <li>
                  <Link className="link" to="/signup">
                    Sign Up
                  </Link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
