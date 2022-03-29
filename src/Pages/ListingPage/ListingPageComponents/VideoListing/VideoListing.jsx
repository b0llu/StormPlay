import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Loader } from "../../../../Components";
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
          return (
            <div key={video._id} className="video-card">
              <div className="for-positioning">
                <img className="rsp-img" src={video.thumbnail} alt="" />
                <span className="material-icons-outlined video-watchLater">
                  watch_later
                </span>
                <span className="material-icons video-like">
                  thumb_up_off_alt
                </span>
              </div>
              <div className="video-info">
                <img className="creator-img" src={video.creatorThumbnail} />
                <div className="video-text">
                  <span className="video-name">{video.shortTitle}</span>
                  <span className="video-creator-name">{video.creator}</span>
                  <span className="video-creator-name">
                    {video.views} | {video.publishDate}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};
