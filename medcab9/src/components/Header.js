import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo-transparent.png";
import "./Header.styles.scss";

const Header = () => {
  return (
    <>
      <div
        uk-sticky="media: 960"
        class="uk-navbar-container tm-navbar-container uk-sticky uk-active uk-sticky-below uk-sticky-fixed"
        style={{ position: "fixed", top: "0px", width: "1960px" }}
      >
        <nav className="uk-navbar uk-dark uk-navbar-container header" uk-navbar>
          <div className="uk-navbar-left">
            <a href="" class="uk-navbar-item uk-logo">
              <img className="logo" src={logo} alt="logo cann medical" />
            </a>
          </div>
          <div className="uk-navbar-right">
            <a
              class="uk-navbar-toggle"
              uk-toggle="target: #sidenav"
              uk-navbar-toggle-icon
            ></a>
            <ul class="uk-navbar-nav">
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
        </nav>
      </div>
      <div id="sidenav" uk-offcanvas="flip: true" class="uk-offcanvas">
        <div class="uk-offcanvas-bar">
          <ul class="uk-nav">
            <li>
              <a class="uk-text-large" href="https://shubhamjain.co/about/">
                about
              </a>
            </li>
            <li>
              <a class="uk-text-large" href="https://shubhamjain.co/">
                blog
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
