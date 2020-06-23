import React from "react";
import { connect } from "react-redux";
// import jwt_decode from "jwt-decode";

import * as actionCreators from "../actions/actionCreators";

const RecommendCard = ({ recommended, saveRecommended }) => {
  // const token = localStorage.getItem("token");
  // const decoded = jwt_decode(token);

  // const userRecommended = Object.assign(recommended, decoded);

  return (
    <div className="recommended-card-container">
      <p>Name: {recommended.name}</p>
      <p>Flavors: {recommended.flavor}</p>
      <p>Description: {recommended.Description}</p>
      <p>Ailment: {recommended.Ailment}</p>
      <p>Effects: {recommended.effect}</p>
      <p>Breed: {recommended.Breed}</p>
      <button onClick={() => saveRecommended(recommended)}>
        Save Recommendation
      </button>
    </div>
  );
};

export default connect(state => state, actionCreators)(RecommendCard);