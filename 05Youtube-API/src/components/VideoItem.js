import React from "react";

import "./video.scss";

export const VideoItem = ({ video, onselectedVideo }) => {
  return (
    <div onClick={() => onselectedVideo(video)} className="video">
      <img src={video.snippet.thumbnails.medium.url}></img>
      <p>{video.snippet.description}</p>
    </div>
  );
};
