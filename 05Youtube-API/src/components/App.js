import React from "react";

import { SearchBar } from "./SearchBar";
import {} from "../api/youtubeAPI";

export class App extends React.Component {
  onSubmitFormProp(term) {
    console.log(term);
  }

  render() {
    return (
      <div>
        <SearchBar onSubmitFormProp={this.onSubmitFormProp} />
      </div>
    );
  }
}
