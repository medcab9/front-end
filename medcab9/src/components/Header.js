import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MainHeader = styled.header`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-around;
  padding: 20px;
  width: 80%;
`;

const Header = () => {
  return (
    <MainHeader>
    <img src="/medcab9/src/assets/logo-cannMedical.jpeg" alt="logo cann medical"/>
      <Link to="/recommendations">Recommendations</Link>
      <Link to="/strains">Strains</Link>
      <Link to="/">Sign In</Link>
      <Link to="/signup">Sign Up</Link>
    </MainHeader>
  );
};

export default Header;
