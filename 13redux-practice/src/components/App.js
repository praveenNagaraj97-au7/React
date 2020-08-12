import React, { Fragment } from "react";
import SearchBar from "./SearchBar";
import ShowBreweries from "./ShowBreweries";

const App = () => {
  return (
    <Fragment>
      <SearchBar />
      <ShowBreweries />
    </Fragment>
  );
};

export default App;
