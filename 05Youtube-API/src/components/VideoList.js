import React from "react";

import { VideoItem } from "./VideoItem";

export const VideoList = ({ videoslistProp, onselectedVideo }) => {
  const renderedVideos = videoslistProp.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        video={video}
        onselectedVideo={onselectedVideo}
      />
    );
  });

  return <React.Fragment>{renderedVideos}</React.Fragment>;
};
