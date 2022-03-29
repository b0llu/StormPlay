import { createContext, useContext, useReducer } from "react";
import { Reducer } from "../Reducer/Reducer";

const ReducerContext = createContext();

const ReducerProvider = ({ children }) => {
  const [{ loading }, dispatch] = useReducer(Reducer, { loading: false });

  return (
    <ReducerContext.Provider value={{ loading, dispatch }}>
      {children}
    </ReducerContext.Provider>
  );
};

const useReducerContext = () => useContext(ReducerContext);

export { useReducerContext, ReducerProvider };
