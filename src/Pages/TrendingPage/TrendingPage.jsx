import { Loader, VideoCard } from "../../Components";
import { useReducerContext } from "../../Context";
import { v4 as uuid } from "uuid";
import "./TrendingPage.css";

export const TrendingPage = () => {
  const { videos, loading } = useReducerContext();
  return (
    <section>
      <div className="trending-header">
        <h1>Trending Today</h1>
      </div>
      {loading ? (
        <Loader />
      ) : (
        <div className="trending-video-container">
          {videos
            .filter((video) => video.trending)
            .map((video) => {
              return <VideoCard key={uuid()} video={video} />;
            })}
        </div>
      )}
    </section>
  );
};
