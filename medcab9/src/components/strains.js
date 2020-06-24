import React, { useState, useEffect } from "react";
import SearchStrains from "./searchstrains";
import SearchResults from "./StrainResults";

import axios from "axios";

const Strains = () => {
  const [strains, setStrains] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  const handleChange = (e) => {
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
  }, [searchTerm]);

  //search for strains
  useEffect(() => {
    const results = strains.filter((strain) => {
      return (
        strain.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        strain.flavor.toLowerCase().includes(searchTerm.toLowerCase()) ||
        strain.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        strain.effects.toLowerCase().includes(searchTerm.toLowerCase()) ||
        strain.ailment.toLowerCase().includes(searchTerm.toLowerCase()) ||
        strain.breed.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });

    setResults(results);
  }, [strains, searchTerm]);

  return (
    <div className="strains uk-flex-column">
      <SearchStrains
        handleChange={handleChange}
        placeholder="Search for strains..."
      />
      <SearchResults results={results} />
    </div>
  );
};

export default Strains;
