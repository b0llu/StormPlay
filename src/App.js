import MockAPI from "Mockman";
import { Routes, Route, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import {
  Header,
  LandingContainer,
  PlaylistModal,
  RequireAuth,
  RestrictAuth,
  Sidebar,
} from "Components";
import {
  AuthContainer,
  HistoryPage,
  IndividualPlaylistPage,
  LandingPage,
  LikedPage,
  ListingPage,
  LoginBox,
  PlaylistPage,
  SignupBox,
  SingleVideoPage,
  TrendingPage,
  WatchLaterPage,
} from "Pages";

function App() {
  const location = useLocation();
  return (
    <LandingContainer>
      <ToastContainer />
      <Header />
      {location.pathname !== "/" &&
        location.pathname !== "/login" &&
        location.pathname !== "/signup" && <Sidebar />}
      <PlaylistModal />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/videos" element={<ListingPage />} />
        <Route path="/videos/:videoId" element={<SingleVideoPage />} />
        <Route path="/trending" element={<TrendingPage />} />

        <Route element={<RequireAuth />}>
          <Route path="/playlist" element={<PlaylistPage />} />
          <Route
            path="/playlist/:playlistId"
            element={<IndividualPlaylistPage />}
          />
          <Route path="/liked" element={<LikedPage />} />
          <Route path="/watchlater" element={<WatchLaterPage />} />
          <Route path="/history" element={<HistoryPage />} />
        </Route>

        <Route element={<RestrictAuth />}>
          <Route
            path="/login"
            element={
              <AuthContainer>
                <LoginBox />
              </AuthContainer>
            }
          />
          <Route
            path="/signup"
            element={
              <AuthContainer>
                <SignupBox />
              </AuthContainer>
            }
          />
        </Route>
        <Route path="/mockman" element={<MockAPI />} />
      </Routes>
    </LandingContainer>
  );
}

export default App;
