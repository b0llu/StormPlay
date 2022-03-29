export const Reducer = (state, action) => {
  switch (action.type) {
    // loading case
    case "LOADING":
      return {
        ...state,
        loading: !state.loading,
      };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
