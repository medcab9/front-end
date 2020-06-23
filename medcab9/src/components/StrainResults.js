import React from "react";

import "./StrainResults.styles.scss";

const StrainResults = ({ results }) => {
  return (
    <div className="strain-results" retults={results}>
      {results.map((item) => {
        return (
          <div className="strain-card" key={item.id}>
            
            <h2>{item.title}</h2>
            <p>{item.flavor}</p>
            <p>{item.description}</p>
            <p>{item.ailment}</p>
            <p>{item.effect}</p>
            <p>{item.breed}</p>
          </div>
        );
      })}
    </div>
  );
};

export default StrainResults;
