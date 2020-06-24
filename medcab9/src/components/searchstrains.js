import React from "react"; 

import CustomInput from "./CustomInput";
// import StrainResults from "./StrainResults";

const SearchStrains = ({ results, placeholder, strainsFilter }) => {

  return (
    <div className="search-results">
      <CustomInput
        type="search"
        placeholder={placeholder}
        strainsFilter={strainsFilter}
        results={results}
      />
    </div>
  );
};

export default SearchStrains;
