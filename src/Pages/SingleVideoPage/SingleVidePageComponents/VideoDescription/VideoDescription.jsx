import { useParams } from "react-router-dom";
import { useReducerContext } from "Context";
import "./VideoDescription.css";

export const VideoDescription = () => {
  const { videoId } = useParams();
  const { videos } = useReducerContext();

  return videos
    .filter((video) => video._id === videoId)
    .map((video) => {
      return (
        <div key={video._id} className="description-container">
          <div className="creator-stats">
            <img
              className="creator-img"
              src={video.creatorThumbnail}
              alt="creator thumbnail"
            />
            <div className="creator-sub">
              <h1>{video.creator}</h1>
              <h2>{video.subscribers}</h2>
            </div>
            <button className="sub-btn">Subscribe</button>
          </div>
          <p className="description">{video.description}</p>
        </div>
      );
    });
};
