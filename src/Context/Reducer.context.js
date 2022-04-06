import { createContext, useContext, useReducer } from "react";
import { Reducer } from "Reducer/Reducer";

const ReducerContext = createContext();

const ReducerProvider = ({ children }) => {
<<<<<<< Updated upstream
  const [{ loading, videos, history }, dispatch] = useReducer(Reducer, {
    loading: false,
    videos: [],
    history: [],
  });

  return (
    <ReducerContext.Provider value={{ loading, videos, history, dispatch }}>
=======
  const [{ loading, videos, history, liked, watchLater }, dispatch] =
    useReducer(Reducer, {
      loading: false,
      videos: [],
      history: [],
      liked: [],
      watchLater: [],
    });

  return (
    <ReducerContext.Provider
      value={{ loading, videos, history, liked, watchLater, dispatch }}
    >
>>>>>>> Stashed changes
      {children}
    </ReducerContext.Provider>
  );
};

const useReducerContext = () => useContext(ReducerContext);

export { useReducerContext, ReducerProvider };
