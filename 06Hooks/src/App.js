import React, { useState } from "react";

import Dropdown from "./components/Dropdown";
import dropdownItems from "./api/database";
import Accordian from "./components/Accordian";
import SearchBar from "./components/Search";
import Route from "./components/Route";
import Header from "./components/Header";

export const App = () => {
  const [selected, setSelected] = useState({
    label: "Select",
    title: "Select a Colour",
  });

  return (
    <React.Fragment>
      <Header />
      <Route path='/'>
        <Accordian />
      </Route>

      <Route path='/search'>
        <SearchBar />
      </Route>

      <Route path='/dropdown'>
        <Dropdown
          selected={selected}
          onSelectedChange={setSelected}
          options={dropdownItems}
        />
      </Route>
    </React.Fragment>
  );
};
