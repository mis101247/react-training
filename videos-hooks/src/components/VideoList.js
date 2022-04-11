import React from "react";
import ViedeItem from "./VideoItem";

const ViedeList = ({ videos, onVideoSelect }) => {
  const renderList = videos.map((video) => {
    return (
      <ViedeItem
        key={video.etag}
        onVideoSelect={onVideoSelect}
        video={video}
      ></ViedeItem>
    );
  });

    return <div className="ui relaxed divided list">{renderList}</div>;
};

export default ViedeList;
