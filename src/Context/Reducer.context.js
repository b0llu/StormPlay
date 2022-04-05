import { createContext, useContext, useReducer } from "react";
import { Reducer } from "Reducer/Reducer";

const ReducerContext = createContext();

const ReducerProvider = ({ children }) => {
  const [{ loading, videos }, dispatch] = useReducer(Reducer, {
    loading: false,
    videos: [],
  });

  return (
    <ReducerContext.Provider value={{ loading, videos, dispatch }}>
      {children}
    </ReducerContext.Provider>
  );
};

const useReducerContext = () => useContext(ReducerContext);

export { useReducerContext, ReducerProvider };
