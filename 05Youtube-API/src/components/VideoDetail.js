import React from "react";

import "./videoDetail.scss";

export const VideoDetail = ({ video }) => {
  if (!video) return <p>Loading</p>;

  return (
    <div className="video-player">
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${video.id.videoId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};
