import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import "./VideoContainer.css";
import { useAuthContext, useHistoryContext, useReducerContext } from "Context";

export const VideoContainer = () => {
  const { videoId } = useParams();
  const { addToHistory } = useHistoryContext();
  const { userState } = useAuthContext();
  const { videos } = useReducerContext();

  const currentVideo = videos.filter((video) => video._id === videoId);

  const handleOnPlay = () => {
    if (userState.id) {
      addToHistory(...currentVideo);
    }
  };

  return (
    <div className="iframe-container">
      <ReactPlayer
        controls
        onPlay={handleOnPlay}
        height="100%"
        width="100%"
        url={`https://www.youtube.com/watch?v=${videoId}`}
      />
    </div>
  );
};
