import React from "react";
import ReactDOM from "react-dom";
import App from "App";
import { makeServer } from "server";
import { BrowserRouter } from "react-router-dom";
import { ReducerProvider } from "Context/Reducer.context";
import { ThemeProvider } from "Context/Theme.context";
import { AuthProvider, PlaylistProvider } from "Context";
import { HistoryProvider } from "Context/History.context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <ReducerProvider>
      <HistoryProvider>
        <ThemeProvider>
          <PlaylistProvider>
            <AuthProvider>
              <BrowserRouter>
                <App />
              </BrowserRouter>
            </AuthProvider>
          </PlaylistProvider>
        </ThemeProvider>
      </HistoryProvider>
    </ReducerProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
