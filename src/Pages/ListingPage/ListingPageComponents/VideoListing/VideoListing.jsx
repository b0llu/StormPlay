import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Loader, VideoCard } from "../../../../Components";
import { useReducerContext } from "../../../../Context/Reducer.context";
import "./VideoListing.css";

export const VideoListing = ({ category }) => {
  const [videos, setVideos] = useState([]);
  const { loading, dispatch } = useReducerContext();
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/videos");
    dispatch({ type: "LOADING" }),
      (async function () {
        try {
          const response = await axios.get("/api/videos");
          if (response.status === 200) {
            dispatch({ type: "LOADING" });
            setVideos(response.data.videos);
          }
        } catch (error) {
          console.log(error);
        }
      })();
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <div className="video-listing-container">
      {videos
        .filter((video) => (category ? video.category === category : video))
        .map((video) => {
          return <VideoCard video={video} />;
        })}
    </div>
  );
};
