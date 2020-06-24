import React from "react";

import CustomInput from "./CustomInput";
// import StrainResults from "./StrainResults";

const SearchStrains = ({ results, placeholder, handleChange,strainsFilter }) => {
  return (
    <div className="search-results">
      <CustomInput
        type="search"
        placeholder={placeholder}
        handleChange={handleChange}
        results={results}
      />
    </div>
  );
};

export default SearchStrains;
