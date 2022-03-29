import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { ReducerProvider } from "./Context/Reducer.context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <ReducerProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ReducerProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
