import { useParams } from "react-router-dom";
import "./VideoContainer.css";

export const VideoContainer = () => {
  const { videoId } = useParams();

  return (
    <div className="iframe-container">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=0`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};
