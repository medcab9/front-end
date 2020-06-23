import React, { useState, useEffect } from "react";
import axios from "axios";

import CustomInput from "./CustomInput";
import { useEffect, useState } from "react";

const SearchStrains = () => {
  const [strains, setStrains] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  const strainsFilter = (e) => {
    setResults(e.target.value);
  };

  //loading page
  useEffect(() => {
    axios
      .get("https://cannedmedical.herokuapp.com/api/strain")
      .then((res) => {
        console.log(res.data);
        setStrains(res.data);
      })
      .catch((err) => console.log("Oh oh, something went wrong: ", err));
  }, [results]);

  //search for strains
  useEffect(() => {
    const results = strains.filter((strain) => {
      return strain.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    setResults(results);
  }, [strains, searchTerm]);

  return (
    <div className="search-results">
      <CustomInput
        type="search"
        placeholder="Search Strains Here..."
        strainsFilter={strainsFilter}
      />
      <StrainResults results={results} />
    </div>
  );
};

export default SearchStrains;
