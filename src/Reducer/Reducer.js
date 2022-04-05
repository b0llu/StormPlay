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

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
