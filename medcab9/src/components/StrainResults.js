import React from "react";

import "./StrainResults.styles.scss";

const StrainResults = ({ results }) => {
  return (
    <div
      className="card-body uk-flex uk-flex-center uk-flex-wrap"
      retults={results}
    >
      <div uk-filter="target: .js-filter">
        Breeds:
        <ul class="uk-subnav uk-subnav-pill">
          <li class="uk-active" uk-filter-control="[data-breed='Hybrid']">
            <a href="#">Hybrid</a>
          </li>
          <li uk-filter-control="[data-breed='Sativa']">
            <a href="#">Sativa</a>
          </li>
          <li uk-filter-control="[data-breed='Indica']">
            <a href="#">Indica</a>
          </li>
        </ul>
      </div>
      {results.map((item) => {
        return (
          <div
            className="uk-card uk-card-default card-custom-style js-filter"
            key={item.id}
          >
            <div class="uk-card-media-top">
              <img
                src="https://industrialhempfarms.com/wp-content/uploads/2020/05/Super-Glue-Cannabis-Strain.jpg"
                alt=""
              />
            </div>
            <div class="uk-card-body">
              <h2 className="uk-card-title">{item.name}</h2>
              <strong>Rating: </strong>
              <span class="uk-badge" style={{ backgroundColor: "green" }}>
                {item.rating}
              </span>
              <h4>{item.flavor}</h4>
              <p className="line-clamp">{item.description}</p>
              <p>
                <strong>Effects: </strong>
                {item.effects}
              </p>
              <div class="uk-card-footer">
                <p>
                  <strong dataBreed={["data-breed"]}>Breed: </strong>
                  {item.breed}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StrainResults;
