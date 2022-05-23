import axios from "axios";
import { AlertToast } from "Components";
import { createContext, useContext } from "react";
import { useReducerContext } from "./Reducer.context";

const HistoryContext = createContext();

const HistoryProvider = ({ children }) => {
  const encodedToken = localStorage.getItem("StormPlayToken");
  const { dispatch, history } = useReducerContext();

  const addToHistory = async (video) => {
    if (encodedToken) {
      if (history.some((v) => v._id === video._id)) {
        dispatch({ type: "HISTORY", payload: history });
      } else {
        try {
          const response = await axios.post(
            "/api/user/history",
            { video },
            { headers: { authorization: encodedToken } }
          );
          if (response.status === 201) {
            dispatch({ type: "HISTORY", payload: response.data.history });
          }
        } catch (error) {
          AlertToast(`${error.response.data.errors}`);
        }
      }
    }
  };

  const removeFromHistory = async (id) => {
    dispatch({ type: "LOADING" });
    try {
      const response = await axios.delete(`/api/user/history/${id}`, {
        headers: { authorization: encodedToken },
      });
      if (response.status === 200) {
        dispatch({ type: "HISTORY", payload: response.data.history });
        dispatch({ type: "LOADING" });
      }
    } catch (error) {
      AlertToast(`${error.response.data.errors}`);
    }
  };

  const removeHistory = async () => {
    dispatch({ type: "LOADING" });
    try {
      const response = await axios.delete("/api/user/history/all", {
        headers: { authorization: encodedToken },
      });
      if (response.status === 200) {
        dispatch({ type: "HISTORY", payload: response.data.history });
        dispatch({ type: "LOADING" });
      }
    } catch (error) {
      AlertToast(`${error.response.data.errors}`);
    }
  };
  return (
    <HistoryContext.Provider
      value={{ addToHistory, removeFromHistory, removeHistory }}
    >
      {children}
    </HistoryContext.Provider>
  );
};

const useHistoryContext = () => useContext(HistoryContext);

export { useHistoryContext, HistoryProvider };
