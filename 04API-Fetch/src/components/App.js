import React from "react";

import unsplash from "../api/unsplashAPI";

import { SearchBar } from "./SearchBar";
import { ImageList } from "./ImagesList";

export class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    const responseData = await unsplash(term);
    this.setState({ images: responseData.data.results });
  };

  render() {
    return (
      <div>
        <SearchBar onSubmitProp={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}
