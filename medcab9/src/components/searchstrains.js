import React from "react";

import "./Searchbar.styles.scss";

import CustomInput from "./CustomInput";
// import StrainResults from "./StrainResults";

const SearchStrains = ({ results, placeholder, handleChange,strainsFilter }) => {
  return (
    <form className="uk-search uk-search-default uk-margin-top	">
    <span uk-search-icon></span>
      <CustomInput
      className="uk-search-input search-custom"
        type="search"
        placeholder={placeholder}
        handleChange={handleChange}
        results={results}
        style={{border: "2px solid #8abb2a"}}
      />
    </form>
  );
};

export default SearchStrains;
