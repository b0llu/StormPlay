import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Loader, VideoCard } from "../../../../Components";
import { useReducerContext } from "../../../../Context/Reducer.context";
import "./CategoryContainer.css";

export const CategoryContainer = () => {
  const { loading, dispatch } = useReducerContext();
  const [categories, setCategories] = useState([]);
  const [mostViewed, setMostViewed] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch({ type: "LOADING" }),
      (async function () {
        try {
          const response = await axios.get("/api/categories");
          if (response.status === 200) {
            dispatch({ type: "LOADING" }),
              setCategories(response.data.categories);
          }
        } catch (error) {
          console.log(error);
        }
      })();
  }, []);

  useEffect(() => {
    (async function () {
      try {
        const response = await axios.get("/api/videos");
        if (response.status === 200) {
          setMostViewed(response.data.videos);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div className="category-container">
      <span className="category-header">Start Your Building Journey Here</span>
      {loading ? (
        <Loader />
      ) : (
        <div className="category-section">
          {categories.map((category) => {
            return (
              <div
                key={category._id}
                onClick={() => navigate(`/videos?category=${category.value}`)}
                className="category-box"
              >
                <img
                  className="rsp-img"
                  src={category.categoryImage}
                  alt={category.alt}
                />
                <div className="for-opacity"></div>
                <h2 className="category-text">{category.categoryName}</h2>
              </div>
            );
          })}
        </div>
      )}
      <span className="category-header">Most Viewed</span>
      {loading ? (
        <Loader />
      ) : (
        <div className="most-viewed-container">
          {mostViewed
            .filter((video) => video.category === "Basics")
            .map((video) => {
              return <VideoCard video={video} />;
            })}
        </div>
      )}
      <div className="expert-box">
        <span className="expert-header">Already a Expert?</span>
        <span className="expert-text">
          If PC Building is a child's play for you why not do it right now!
        </span>
        <span className="expert-text">
          Check out our Ecom site below to buy any PC part that you wish for!
        </span>
        <a
          target="_blank"
          href="https://stormpoint-shop.netlify.app/"
          className="text-btn expert-btn"
        >
          <i className="fas fa-bolt"></i>StormPoint
        </a>
      </div>
    </div>
  );
};
