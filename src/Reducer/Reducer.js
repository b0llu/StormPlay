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

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
