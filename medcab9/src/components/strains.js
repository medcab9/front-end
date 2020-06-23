import React, { useState, useEffect } from "react";
import SearchStrains from "./SearchStrains";
import SearchResults from "./StrainResults";

import axios from "axios";

const Strains = () => {
  const [strains, setStrains] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  const strainsFilter = (e) => {
    setSearchTerm(e.target.value);
  };

  //loading page
  useEffect(() => {
    axios
      .get("https://cannedmedical.herokuapp.com/strains")
      .then((res) => {
        console.log(res.data);
        setStrains(res.data);
      })
      .catch((err) => console.log("Oh oh, something went wrong: ", err));
  }, []);

  //search for strains
  useEffect(() => {
    const results = strains.filter((strain) => {
      return strain.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    setResults(results);
  }, [strains, searchTerm]);

  return (
    <div className="strains">
      <SearchStrains strainsFilter={strainsFilter} />
      <SearchResults results={results} />
    </div>
  );
};

export default Strains;
