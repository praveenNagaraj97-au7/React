import React from "react";

import { SearchBar } from "./SearchBar";
import youtube, { APIKEY } from "../api/youtubeAPI";

export class App extends React.Component {
  async onSubmitFormProp(term) {
    const data = await youtube.get(`/search`, {
      params: {
        q: term,
        type: "video",
        key: APIKEY,
        maxResults: 5,
        part: "snippet",
      },
    });
    console.log(data);
  }

  render() {
    return (
      <div>
        <SearchBar onSubmitFormProp={this.onSubmitFormProp} />
      </div>
    );
  }
}
