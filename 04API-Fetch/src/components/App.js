import React from "react";

import unsplash from "../api/unsplashAPI";

import { SearchBar } from "./SearchBar";

export class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    const responseData = await unsplash(term);
    this.setState({ images: responseData.data.results });
  };

  render() {
    return (
      <SearchBar
        onSubmitProp={this.onSearchSubmit}
        images={this.state.images}
      />
    );
  }
}
