import { createContext, useContext, useReducer } from "react";
import { Reducer } from "Reducer/Reducer";

const ReducerContext = createContext();

const ReducerProvider = ({ children }) => {
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
      {children}
    </ReducerContext.Provider>
  );
};

const useReducerContext = () => useContext(ReducerContext);

export { useReducerContext, ReducerProvider };
