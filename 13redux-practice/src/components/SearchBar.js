import React from "react";
import { FormInput } from "shards-react";

const SearchBar = () => {
  return (
    <FormInput
      style={{ width: "98vw", height: "4vh", margin: "auto" }}
      size='lg'
      placeholder='Search For Brewaries'
    />
  );
};

export default SearchBar;
