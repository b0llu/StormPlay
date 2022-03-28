import { Header, LandingContainer, Sidebar, Toast } from "./Components";
import { Routes, Route } from "react-router-dom";
import { LandingPage } from "./Pages";
import MockAPI from "./Mockman";

function App() {
  return (
    <LandingContainer>
      <Toast />
      <Header />
      {/* <Sidebar /> */}

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/mockman" element={<MockAPI />} />
      </Routes>
    </LandingContainer>
  );
}

export default App;
