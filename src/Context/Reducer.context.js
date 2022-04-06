import { createContext, useContext, useReducer } from "react";
import { Reducer } from "Reducer/Reducer";

const ReducerContext = createContext();

const ReducerProvider = ({ children }) => {
  const [{ loading, videos, history, liked }, dispatch] = useReducer(Reducer, {
    loading: false,
    videos: [],
    history: [],
    liked: [],
  });

  return (
    <ReducerContext.Provider
      value={{ loading, videos, history, liked, dispatch }}
    >
      {children}
    </ReducerContext.Provider>
  );
};

const useReducerContext = () => useContext(ReducerContext);

export { useReducerContext, ReducerProvider };
