import React from "react"; 

import CustomInput from "./CustomInput";
// import StrainResults from "./StrainResults";

const SearchStrains = () => {
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
        placeholder={placeholder}
        strainsFilter={strainsFilter}
        results={results}
      />
    </div>
  );
};

export default SearchStrains;
