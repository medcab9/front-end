import React from "react";

import "./StrainResults.styles.scss";

const StrainResults = ({ results }) => {
  return (
    <div className="card-body" retults={results}>
      {results.map((item) => {
        return (
          <div
            className="uk-card uk-card-default card-custom-style"
            key={item.id}
          >
            <div class="uk-card-media-top">
              <img src="http://via.placeholder.com/450x340" alt="" />
            </div>
            <div class="uk-card-body">
              <h2 className="uk-card-title">{item.name}</h2>
              <h4>{item.flavor}</h4>
              <p className="line-clamp">{item.description}</p>
              <p><strong>Effects: </strong>{item.effects}</p>
              <p className="good-for">
                <strong>Good for: </strong>
                {item.ailment}
              </p>
              <div class="uk-card-footer">
                <p>
                  <strong>Breed: </strong>
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
