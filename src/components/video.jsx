import React from "react";

const Video = ({ data }) => {
  return (
    <iframe
      width="100%"
      height="315"
      src={data.asset_content}
      title={data.asset_title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="mb-2"
    ></iframe>
  );
};

export default Video;
