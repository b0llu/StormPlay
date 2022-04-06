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
  WatchLaterProvider,
} from "Context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <ReducerProvider>
      <WatchLaterProvider>
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
      </WatchLaterProvider>
    </ReducerProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
