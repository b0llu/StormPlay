import { createContext, useContext, useReducer } from "react";
import { Reducer } from "Reducer/Reducer";

const ReducerContext = createContext();

const ReducerProvider = ({ children }) => {
  const [{ loading, videos, history }, dispatch] = useReducer(Reducer, {
    loading: false,
    videos: [],
    history: [],
  });

  return (
    <ReducerContext.Provider value={{ loading, videos, history, dispatch }}>
      {children}
    </ReducerContext.Provider>
  );
};

const useReducerContext = () => useContext(ReducerContext);

export { useReducerContext, ReducerProvider };
