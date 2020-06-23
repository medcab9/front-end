import React from "react";
import SearchStrains from "./searchstrains";
import SearchResults from "./StrainResults";

const Strains = () => {
  return (
    <div className="strains">
      <SearchStrains />
      <SearchResults />
    </div>
  );
};

export default Strains;
