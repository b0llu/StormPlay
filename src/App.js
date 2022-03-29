import { Header, LandingContainer, Sidebar, Toast } from "./Components";
import { Routes, Route, useLocation } from "react-router-dom";
import { LandingPage } from "./Pages";
import MockAPI from "./Mockman";
import { ListingPage } from "./Pages/ListingPage/ListingPage";

function App() {
  const location = useLocation();

  return (
    <LandingContainer>
      <Toast />
      <Header />
      {location.pathname !== "/" && <Sidebar />}

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/videos" element={<ListingPage />} />
        <Route path="/mockman" element={<MockAPI />} />
      </Routes>
    </LandingContainer>
  );
}

export default App;
