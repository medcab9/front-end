import React from "react";
import { NavLink, Switch, Route } from "react-router-dom";
import styled from "styled-components";
// import PrivateRoute from "../utils/PrivateRoute";
import RecommendList from "./recommendations";
import RecommendForm from "./recommendationform";

const Container = styled.div`
  display: flex;
`;

const DashNavContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  width: 20vw;
  border-bottom-right-radius: 50px;
  min-height: 70vh;
`;
const DashNavItem = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: transparent;
  border-radius: 50px;
  border: 0px solid black;
  color: black;
  margin: 0.3em;
  padding: 1em;
  font-weight: bold;
  text-decoration: none;
  min-width: 90%;
  cursor: pointer;
  i {
    text-decoration: none;
  }
`;

export default function UserProfile() {
  return (
    <Container>
      <DashNavContainer>
        <NavLink to="/recommendations">
          <DashNavItem>
            <p>Strain Recommendations</p>
          </DashNavItem>
        </NavLink>
        <NavLink to="/recommendationform">
          <DashNavItem>
            <p>Get Strain Recommendation</p>
          </DashNavItem>
        </NavLink>
      </DashNavContainer>
      <Switch>
        <Route
          path="/recommendations"
          component={RecommendList}
        />
        <Route path="/recommendationform" component={RecommendForm} />
      </Switch>
    </Container>
  );
}