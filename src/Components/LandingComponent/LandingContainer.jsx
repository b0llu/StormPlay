import { useLocation } from "react-router-dom";
import "./LandingContainer.css";

export const LandingContainer = ({ children }) => {
  const location = useLocation();

  return (
    <section
      className={
        location.pathname === "/login" ||
        location.pathname === "/signup" ||
        location.pathname === "/"
          ? "landing-container-auth"
          : "landing-container"
      }
    >
      {children}
    </section>
  );
};
