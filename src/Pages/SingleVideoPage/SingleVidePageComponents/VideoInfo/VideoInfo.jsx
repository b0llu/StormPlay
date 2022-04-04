import { Link, useParams } from "react-router-dom";
import {
  useAuthContext,
  usePlaylistContext,
  useReducerContext,
} from "../../../../Context";
import "./VideoInfo.css";

export const VideoInfo = () => {
  const { videoId } = useParams();
  const { videos } = useReducerContext();
  const { userState } = useAuthContext();
  const { setPlaylistModal } = usePlaylistContext();

  return videos
    .filter((video) => video._id === videoId)
    .map((video) => {
      return (
        <div key={video._id} className="videoInfo">
          <h1>{video.title}</h1>
          <div className="video-views">
            <h2>
              {video.views} | {video.publishDate}
            </h2>
            <div className="btn-container">
              <div className="like">
                <span className="material-icons">thumb_up_alt</span>
                <span className="text">Like</span>
              </div>
              <div className="watch">
                <span className="material-icons">watch_later</span>
                <span className="text">Watch Later</span>
              </div>

              {Object.keys(userState).length === 0 ? (
                <Link to="/login">
                  <div className="add-to-playlist">
                    <span className="material-icons">queue</span>
                    <span className="text">Add to Playlist</span>
                  </div>
                </Link>
              ) : (
                <div
                  onClick={() =>
                    setPlaylistModal({ state: true, video: video })
                  }
                  className="add-to-playlist"
                >
                  <span className="material-icons">queue</span>
                  <span className="text">Add to Playlist</span>
                </div>
              )}
            </div>
          </div>
        </div>
      );
    });
};
