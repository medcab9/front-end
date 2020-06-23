import React from "react";
import SearchStrains from "./SearchStrains";
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
