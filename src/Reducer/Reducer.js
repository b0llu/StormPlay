import { useReducerContext } from "Context";

export const Reducer = (state, action) => {
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

    // search filter
    case "SEARCH_FILTER":
      return { ...state, searchTerm: action.payload };

    // reset for search
    case "RESET_FOR_SEARCH":
      return {
        ...state,
        searchTerm: "",
      };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
