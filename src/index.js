import React from "react";
import ReactDOM from "react-dom";
import App from "App";
import { makeServer } from "server";
import { BrowserRouter } from "react-router-dom";
import {
  AuthProvider,
  HistoryProvider,
  LikeProvider,
  PlaylistProvider,
  ReducerProvider,
  ThemeProvider,
} from "Context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <ReducerProvider>
      <LikeProvider>
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
      </LikeProvider>
    </ReducerProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
