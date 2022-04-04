import { Loader, VideoCard } from "../../Components";
import { useReducerContext } from "../../Context";
import { v4 as uuid } from "uuid";
import "./TrendingPage.css";
import { useEffect } from "react";
import axios from "axios";

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
            .filter((video) => (video.trending ? video : null))
            .map((video) => {
              return <VideoCard key={uuid()} video={video} />;
            })}
        </div>
      )}
    </section>
  );
};
