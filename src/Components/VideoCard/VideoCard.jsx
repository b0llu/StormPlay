import { useParams, Link, useLocation } from "react-router-dom";
import {
  usePlaylistContext,
  useAuthContext,
  useReducerContext,
  useLikeContext,
  useWatchLaterContext,
} from "Context";
import "./VideoCard.css";
import { useHistoryContext } from "Context/History.context";

export const VideoCard = ({ video }) => {
  const { setPlaylistModal, removeVideo } = usePlaylistContext();
  const { playlistId } = useParams();
  const { userState } = useAuthContext();
  const { removeFromHistory } = useHistoryContext();
  const { removeFromLiked } = useLikeContext();
  const { addToWatchLater, removeFromWatchLater } = useWatchLaterContext();
  const { watchLater } = useReducerContext();
  const location = useLocation();

  return (
    <div key={video._id} className="video-card">
      <div className="for-positioning">
        <Link state={{ from: location }} to={`/videos/${video._id}`}>
          <img
            className="rsp-img"
            src={video.thumbnail}
            alt="video-thumbnail"
          />
        </Link>
        {Object.keys(userState).length === 0 ? (
          <Link state={{ from: location }} to="/login">
            <span className="material-icons-outlined video-watchLater">
              watch_later
            </span>
          </Link>
        ) : watchLater.findIndex((v) => v._id === video._id) !== -1 ? (
          <span
            onClick={() => removeFromWatchLater(video._id)}
            className="material-icons video-watchLater  active"
          >
            watch_later
          </span>
        ) : (
          <span
            onClick={() => addToWatchLater(video)}
            className="material-icons-outlined video-watchLater"
          >
            watch_later
          </span>
        )}
        {Object.keys(userState).length === 0 ? (
          <Link state={{ from: location }} to="/login">
            <span className="material-icons playlist">queue</span>
          </Link>
        ) : (
          <span
            onClick={() => setPlaylistModal({ state: true, video: video })}
            className="material-icons playlist"
          >
            queue
          </span>
        )}
      </div>
      <div className="video-info">
        <img
          loading="lazy"
          className="creator-img"
          src={video.creatorThumbnail}
        />
        <div className="video-text">
          <Link state={{ from: location }} to={`/videos/${video._id}`}>
            <span className="video-name">{video.shortTitle}</span>
            <span className="video-creator-name">{video.creator}</span>
          </Link>
          {playlistId ||
          location.pathname.includes("/history") ||
          location.pathname.includes("/liked") ? (
            <div>
              <span className="video-creator-name">
                {video.views} | {video.publishDate}
                {playlistId && (
                  <span
                    onClick={() => {
                      removeVideo(playlistId, video._id);
                    }}
                    className="material-icons"
                  >
                    delete
                  </span>
                )}
                {location.pathname === "/history" && (
                  <span
                    onClick={() => {
                      removeFromHistory(video._id);
                    }}
                    className="material-icons"
                  >
                    delete
                  </span>
                )}
                {location.pathname === "/liked" && (
                  <span
                    onClick={() => {
                      removeFromLiked(video._id);
                    }}
                    className="material-icons"
                  >
                    delete
                  </span>
                )}
              </span>
            </div>
          ) : (
            <span className="video-creator-name">
              {video.views} | {video.publishDate}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
