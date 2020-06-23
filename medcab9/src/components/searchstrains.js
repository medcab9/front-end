import React from "react"; 

import CustomInput from "./CustomInput";
// import StrainResults from "./StrainResults";

const SearchStrains = ({ results, strainsFilter }) => {

  return (
    <div className="search-results">
      <CustomInput
        type="search"
        placeholder="Search Strains Here..."
        strainsFilter={strainsFilter}
      />
    </div>
  );
};

export default SearchStrains;
