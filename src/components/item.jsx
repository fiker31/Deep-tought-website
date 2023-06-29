import React, { useState, useEffect } from "react";
import data from "../../dt.json";
import Board from "./board";
import InfoIcon from "@mui/icons-material/Info";
import Video from "./video";
import Article from "./article";
import ThreadBuilder from "./threadbuilder";

const Item = ({ data }) => {
  const displayContent = () => {
    switch (data.asset_content_type) {
      case "video":
        return <Video data={data} />;
      case "article":
        return <Article data={data} />;
      case "threadbuilder":
        return <ThreadBuilder data={data} />;
      default:
        return <p>Invalid Content</p>;
    }
  };
  return (
    <Board
      title={data.asset_title}
      icon={<InfoIcon color="white" />}
      header={data.asset_description}
    >
      {displayContent()}
    </Board>
  );
};

export default Item;
