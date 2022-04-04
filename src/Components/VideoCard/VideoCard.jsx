import { useParams, Link } from "react-router-dom";
import { usePlaylistContext, useAuthContext } from "../../Context";
import "./VideoCard.css";

export const VideoCard = ({ video }) => {
  const { setPlaylistModal, removeVideo, playlistModal } = usePlaylistContext();
  const { playlistId } = useParams();
  const { userState } = useAuthContext();

  return (
    <div key={video._id} className="video-card">
      <div className="for-positioning">
        <img className="rsp-img" src={video.thumbnail} alt="" />
        <span className="material-icons-outlined video-watchLater">
          watch_later
        </span>
        {Object.keys(userState).length === 0 ? (
          <Link to="/login">
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
        <img className="creator-img" src={video.creatorThumbnail} />
        <div className="video-text">
          <span className="video-name">{video.shortTitle}</span>
          <span className="video-creator-name">{video.creator}</span>
          {playlistId ? (
            <div>
              <span className="video-creator-name">
                {video.views} | {video.publishDate}
                <span
                  onClick={() => {
                    console.log(playlistModal);
                    removeVideo(playlistId, video._id);
                  }}
                  className="material-icons"
                >
                  delete
                </span>
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
