import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Loader, VideoCard } from "Components";
import { useReducerContext } from "Context/Reducer.context";
import { useFunction } from "Hook/useFunction";
import "./VideoListing.css";

export const VideoListing = ({ category }) => {
  const { loading } = useReducerContext();
  const { searchFilteredVideos } = useFunction();
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/videos");
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <div className="video-listing-container">
      {searchFilteredVideos.length < 1 ? (
        <h1 className="empty-state">Searched Video is not Available</h1>
      ) : (
        searchFilteredVideos
          .filter((video) => (category ? video.category === category : video))
          .map((video) => {
            return <VideoCard key={video._id} video={video} />;
          })
      )}
    </div>
  );
};
