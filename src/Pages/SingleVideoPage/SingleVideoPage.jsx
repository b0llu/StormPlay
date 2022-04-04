import axios from "axios";
import { useEffect } from "react";
import { Loader } from "../../Components";
import { useReducerContext } from "../../Context";
import {
  RelatedVideos,
  VideoContainer,
  VideoDescription,
  VideoInfo,
} from "./SingleVidePageComponents";

export const SingleVideoPage = () => {
  const { dispatch, loading } = useReducerContext();

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
      {loading ? (
        <Loader />
      ) : (
        <>
          <VideoContainer />
          <VideoInfo />
          <VideoDescription />
          <RelatedVideos />
        </>
      )}
    </section>
  );
};
