import { Loader, VideoCard } from "Components";
import { useReducerContext } from "Context";
import "./WatchLaterPage.css";

export const WatchLaterPage = () => {
  const { watchLater, loading } = useReducerContext();

  return (
    <section>
      <div className="watch-later-header">
        {watchLater.length === 0 ? (
          <h1>Nothing in Watch Later</h1>
        ) : (
          <h1>Watch Later</h1>
        )}
      </div>
      <div className="watch-later-container">
        {loading ? (
          <Loader />
        ) : (
          watchLater.map((video) => {
            return <VideoCard key={video._id} video={video} />;
          })
        )}
      </div>
    </section>
  );
};
