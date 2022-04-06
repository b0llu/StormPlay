import axios from "axios";

export const Reducer = (state, action) => {
  const encodedToken = localStorage.getItem("StormPlayToken");

  switch (action.type) {
    // loading case
    case "LOADING":
      return {
        ...state,
        loading: !state.loading,
      };

    // storing products
    case "INITIALIZE_VIDEOS":
      return {
        ...state,
        videos: action.payload,
      };

    // storing history
    case "HISTORY":
      return { ...state, history: action.payload };

    // storing likes
    case "LIKED":
      return { ...state, liked: action.payload };

    // storing watch later
    case "WATCH_LATER":
      return { ...state, watchLater: action.payload };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
