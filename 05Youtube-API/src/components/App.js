import React from "react";

import { SearchBar } from "./SearchBar";
import { VideoList } from "./VideoList";
import { VideoDetail } from "./VideoDetail";

import youtube, { APIKEY } from "../api/youtubeAPI";

export class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onSubmitFormProp("");
  }

  onSubmitFormProp = async (term) => {
    try {
      const response = await youtube.get(`/search`, {
        params: {
          q: term,
          type: "video",
          key: APIKEY,
          maxResults: 5,
          part: "snippet",
        },
      });

      this.setState({ videos: response.data.items });
    } catch (error) {
      console.log(error);
    }
  };

  onselectedVideo = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <React.Fragment>
        <SearchBar onSubmitFormProp={this.onSubmitFormProp} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onselectedVideo={this.onselectedVideo}
          videoslistProp={this.state.videos}
        />
      </React.Fragment>
    );
  }
}
