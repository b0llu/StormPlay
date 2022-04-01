import { usePlaylistContext } from "../../Context";
import "./VideoCard.css";

export const VideoCard = ({ video }) => {
  const { setPlaylistModal } = usePlaylistContext();

  return (
    <div key={video._id} className="video-card">
      <div className="for-positioning">
        <img className="rsp-img" src={video.thumbnail} alt="" />
        <span className="material-icons-outlined video-watchLater">
          watch_later
        </span>
        <span className="material-icons video-like">thumb_up_off_alt</span>
        <span
          onClick={() => setPlaylistModal(true)}
          className="material-icons playlist"
        >
          queue
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
};
