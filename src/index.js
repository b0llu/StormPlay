import React from "react";
import ReactDOM from "react-dom";
import App from "App";
import { makeServer } from "server";
import { BrowserRouter } from "react-router-dom";
<<<<<<< Updated upstream
import { ReducerProvider } from "Context/Reducer.context";
import { ThemeProvider } from "Context/Theme.context";
import { AuthProvider, PlaylistProvider } from "Context";
import { HistoryProvider } from "Context/History.context";
=======
import {
  AuthProvider,
  HistoryProvider,
  LikeProvider,
  PlaylistProvider,
  ReducerProvider,
  ThemeProvider,
  WatchLaterProvider,
} from "Context";
>>>>>>> Stashed changes

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <ReducerProvider>
<<<<<<< Updated upstream
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
=======
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
>>>>>>> Stashed changes
    </ReducerProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
