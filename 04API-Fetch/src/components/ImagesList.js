import React from "react";

export const ImageList = (props) => {
  const images = props.images.map(({ urls, id, alt_description }) => {
    return (
      <img
        className='image-display-each'
        src={urls.regular}
        key={id}
        alt={alt_description}
      />
    );
  });

  if (images.length === 0) {
    return <h3 style={{ textAlign: "center" }}>Type Something to Search</h3>;
  }
  return <div className='images-display'>{images}</div>;
};
