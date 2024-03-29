import axios from "axios";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useReducerContext } from "Context";
import { useDocTitle } from "Hook/useTitle";
import { CategoryBar, VideoListing } from "./ListingPageComponents";

export const ListingPage = () => {
  const { dispatch } = useReducerContext();
  const [searchParams] = useSearchParams();
  const categoryName = searchParams.get("category");
  const [category, setCategory] = useState(categoryName);
  useDocTitle("Videos | StormPlay");

  useEffect(() => {
    dispatch({ type: "LOADING" }),
      dispatch({ type: "RESET_FOR_SEARCH" }),
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
      <CategoryBar category={category} setCategory={setCategory} />
      <VideoListing category={category} />
    </section>
  );
};
