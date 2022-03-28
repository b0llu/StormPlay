import axios from "axios";
import { useEffect, useState } from "react";
import "./CategoryContainer.css";

export const CategoryContainer = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async function () {
      try {
        const response = await axios.get("/api/categories");
        if (response.status === 200) {
          setCategories(response.data.categories);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div className="category-container">
      <span className="category-header">Start Your Building Journey Here</span>
      <div className="category-section">
        {categories.map((category) => {
          return (
            <div key={category._id} className="category-box">
              <img className="rsp-img" src={category.categoryImage} alt="" />
              <div className="for-opacity"></div>
              <h2 className="category-text">{category.categoryName}</h2>
            </div>
          );
        })}
      </div>
      <span className="category-header">Already a Expert?</span>
      <span className="expert-text">
        If PC Building is a child's play for you why not do it right now!
      </span>
      <span className="expert-text">
        Check out our Ecom site below to buy any PC part that you wish for!
      </span>
      <a
        href="https://stormpoint-shop.netlify.app/"
        className="text-btn expert-btn"
      >
        <i className="fas fa-bolt"></i>StormPoint
      </a>
    </div>
  );
};
