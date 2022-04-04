import "./Header.css";
import { Link, useLocation } from "react-router-dom";
import { useThemeContext } from "../../Context/Theme.context";
import { useAuthContext } from "../../Context";

export const Header = () => {
  const encodedToken = localStorage.getItem("StormPlayToken");
  const user = localStorage.getItem("StormPlayUser");
  const location = useLocation();
  const { theme, toggleLightDarkTheme } = useThemeContext();
  const { signout } = useAuthContext();

  return (
    <nav>
      <div className="navbar">
        <Link className="name" to="/">
          <i className="fas fa-bolt"></i> StormPlay
        </Link>
        {location.pathname === "/videos" && (
          <input className="header-input" placeholder="Search" type="text" />
        )}
        <div className="margin-left-auto">
          <div className="icon-container">
            <p className="icon-color">{user}</p>
            <div className="badge">
              <i className="fa-solid fas fa-user icon-color"></i>
            </div>
            <Link to="/">
              {encodedToken && (
                <div onClick={signout} className="badge">
                  <i className="fas fa-sign-out icon-color"></i>
                </div>
              )}
            </Link>
            <i
              onClick={toggleLightDarkTheme}
              className={`${
                theme === "light" ? "fas fa-moon" : "fas fa-sun"
              } icon icon-color`}
            ></i>
          </div>
        </div>
        {location.pathname === "/videos" && (
          <input className="mobile-input" type="text" placeholder="Search" />
        )}
      </div>
    </nav>
  );
};
