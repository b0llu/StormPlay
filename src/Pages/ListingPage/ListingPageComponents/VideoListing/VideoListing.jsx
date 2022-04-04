import axios from "axios";
import { v4 as uuid } from "uuid";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Loader, VideoCard } from "../../../../Components";
import { useReducerContext } from "../../../../Context/Reducer.context";
import "./VideoListing.css";

export const VideoListing = ({ category }) => {
  const { loading, videos } = useReducerContext();
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/videos");
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <div className="video-listing-container">
      {videos
        .filter((video) => (category ? video.category === category : video))
        .map((video) => {
          return <VideoCard key={uuid()} video={video} />;
        })}
    </div>
  );
};
