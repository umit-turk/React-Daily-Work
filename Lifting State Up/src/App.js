import React, { useState } from "react";
import "./styles.css";

import CountryList from "./CountryList";
import SearchForm from "./SearchForm";

const App = () => {
  const [search, setSearch] = useState("");

  const handleChange = (event) => setSearch(event.target.value);

  return (
    <div className="App">
      <h1>Countries</h1>
      <SearchForm search={search} onSearchChange={handleChange} />
      <CountryList search={search} />
    </div>
  );
};

export default App;
