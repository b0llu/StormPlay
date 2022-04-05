import { Loader, VideoCard } from "Components";
import { useReducerContext } from "Context";
import { useEffect } from "react";
import axios from "axios";
import "./TrendingPage.css";

export const TrendingPage = () => {
  const { videos, loading, dispatch } = useReducerContext();

  useEffect(() => {
    dispatch({ type: "LOADING" }),
      (async function () {
        try {
          const response = await axios.get("/api/videos");
          if (response.status === 200) {
            dispatch({
              type: "INITIALIZE_VIDEOS",
              payload: response.data.videos,
            });
            dispatch({ type: "LOADING" });
          }
        } catch (error) {
          console.log(error);
        }
      })();
  }, []);

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
              return <VideoCard key={video._id} video={video} />;
            })}
        </div>
      )}
    </section>
  );
};
