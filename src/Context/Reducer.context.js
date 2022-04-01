import { createContext, useContext, useReducer } from "react";
import { Reducer } from "../Reducer/Reducer";

const ReducerContext = createContext();

const ReducerProvider = ({ children }) => {
  const [{ loading, forToast }, dispatch] = useReducer(Reducer, {
    loading: false,
    forToast: { text: "", trigger: false, selector: "" },
  });

  return (
    <ReducerContext.Provider value={{ loading, forToast, dispatch }}>
      {children}
    </ReducerContext.Provider>
  );
};

const useReducerContext = () => useContext(ReducerContext);

export { useReducerContext, ReducerProvider };
