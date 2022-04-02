import {
  Header,
  LandingContainer,
  PlaylistModal,
  RequireAuth,
  RestrictAuth,
  Sidebar,
} from "./Components";
import { Routes, Route, useLocation } from "react-router-dom";
import {
  AuthContainer,
  IndividualPlaylistPage,
  LandingPage,
  ListingPage,
  LoginBox,
  PlaylistPage,
  SignupBox,
} from "./Pages";
import MockAPI from "./Mockman";
import { ToastContainer } from "react-toastify";

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
        <Route path="/mockman" element={<MockAPI />} />

        <Route element={<RequireAuth />}>
          <Route path="/playlist" element={<PlaylistPage />} />
          <Route
            path="/playlist/:playlistId"
            element={<IndividualPlaylistPage />}
          />
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
      </Routes>
    </LandingContainer>
  );
}

export default App;
