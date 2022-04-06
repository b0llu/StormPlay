import axios from "axios";
import { AlertToast, SuccessToast } from "Components";
import { createContext, useContext } from "react";
import { useReducerContext } from "./Reducer.context";

const WatchLaterContext = createContext();

const WatchLaterProvider = ({ children }) => {
  const encodedToken = localStorage.getItem("StormPlayToken");
  const { dispatch } = useReducerContext();

  const addToWatchLater = async (video) => {
    try {
      const response = await axios.post(
        "/api/user/watchlater",
        { video },
        { headers: { authorization: encodedToken } }
      );
      if (response.status === 201) {
        SuccessToast("Added To Watch Later");
        dispatch({ type: "WATCH_LATER", payload: response.data.watchlater });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const removeFromWatchLater = async (id) => {
    try {
      const response = await axios.delete(`/api/user/watchlater/${id}`, {
        headers: { authorization: encodedToken },
      });
      if (response.status === 200) {
        AlertToast("Removed From Watch Later");
        dispatch({ type: "WATCH_LATER", payload: response.data.watchlater });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <WatchLaterContext.Provider
      value={{ addToWatchLater, removeFromWatchLater }}
    >
      {children}
    </WatchLaterContext.Provider>
  );
};

const useWatchLaterContext = () => useContext(WatchLaterContext);

export { useWatchLaterContext, WatchLaterProvider };
