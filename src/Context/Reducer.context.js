import { createContext, useContext, useReducer } from "react";
import { Reducer } from "Reducer/Reducer";

const ReducerContext = createContext();

const ReducerProvider = ({ children }) => {
  const [{ loading, videos }, dispatch] = useReducer(Reducer, {
    loading: false,
    videos: [
      useEffect(() => {
        dispatch({ type: "LOADING" }),
          (async function () {
            try {
              const response = await axios.get("/api/videos");
              if (response.status === 200) {
                dispatch({
                  type: "INITIALIZE_VIDEOS",
                  payload: response.data.videos,
                });
                dispatch({ type: "LOADING" });
              }
            } catch (error) {
              console.log(error);
            }
          })();
      }, []),
    ],
  });

  return (
    <ReducerContext.Provider value={{ loading, videos, dispatch }}>
      {children}
    </ReducerContext.Provider>
  );
};

const useReducerContext = () => useContext(ReducerContext);

export { useReducerContext, ReducerProvider };
