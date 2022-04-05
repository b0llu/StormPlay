import { VideoCard } from "Components";
import { useReducerContext } from "Context";
import "./RelatedVideos.css";

export const RelatedVideos = () => {
  const { videos } = useReducerContext();
  return (
    <div className="related-videos-header">
      <h1>Related Videos</h1>
      <div className="related-videos">
        {videos.slice(0, 6).map((video) => {
          return <VideoCard key={video._id} video={video} />;
        })}
      </div>
    </div>
  );
};
