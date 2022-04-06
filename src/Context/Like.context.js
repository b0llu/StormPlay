import axios from "axios";
import { createContext, useContext } from "react";
import { useReducerContext } from "./Reducer.context";

const LikeContext = createContext();

const LikeProvider = ({ children }) => {
  const encodedToken = localStorage.getItem("StormPlayToken");
  const { dispatch } = useReducerContext();

  const addToLiked = async (video) => {
    try {
      const response = await axios.post(
        "/api/user/likes",
        { video },
        { headers: { authorization: encodedToken } }
      );
      if (response.status === 201) {
        dispatch({ type: "LIKED", payload: response.data.likes });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const removeFromLiked = async (id) => {
    try {
      const response = await axios.delete(`/api/user/likes/${id}`, {
        headers: { authorization: encodedToken },
      });
      console.log(response)
      if (response.status === 200) {
        dispatch({ type: "LIKED", payload: response.data.likes });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <LikeContext.Provider value={{ addToLiked, removeFromLiked }}>
      {children}
    </LikeContext.Provider>
  );
};

const useLikeContext = () => useContext(LikeContext);

export { useLikeContext, LikeProvider };
