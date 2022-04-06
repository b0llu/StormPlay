import { Loader, VideoCard } from "Components";
import { useReducerContext } from "Context";
import "./LikedPage.css";

export const LikedPage = () => {
  const { liked, loading } = useReducerContext();
  return (
    <section>
      <div className="like-page-header">
        {liked.length === 0 ? (
          <h1>You have no Liked Videos</h1>
        ) : (
          <h1>Your Liked Videos</h1>
        )}
      </div>
      {loading ? (
        <Loader />
      ) : (
        <div className="like-page-container">
          {liked.map((video) => {
            return <VideoCard key={video._id} video={video} />;
          })}
        </div>
      )}
    </section>
  );
};
