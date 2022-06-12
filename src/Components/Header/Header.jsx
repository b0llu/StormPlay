import "./Header.css";
import { Link, useLocation } from "react-router-dom";
import { useThemeContext } from "Context/Theme.context";
import { useAuthContext, useReducerContext } from "Context";

export const Header = () => {
  const user = localStorage.getItem("StormPlayUser");
  const location = useLocation();
  const { theme, toggleLightDarkTheme } = useThemeContext();
  const { signout, userState } = useAuthContext();
  const { dispatch, searchTerm } = useReducerContext();

  return (
    <nav>
      <div className="navbar">
        <Link className="name" to="/">
          <i className="fas fa-bolt"></i> StormPlay
        </Link>
        {location.pathname === "/videos" && (
          <input
            onChange={(e) =>
              dispatch({ type: "SEARCH_FILTER", payload: e.target.value })
            }
            value={searchTerm}
            className="header-input"
            placeholder="Search"
            type="text"
          />
        )}
        <div className="margin-left-auto">
          <div className="icon-container">
            {Object.keys(userState).length !== 0 && (
              <p className="icon-color">Hey, {user}</p>
            )}
            <Link state={{ from: location }} to="/dashboard">
              <div className="badge">
                <i className="fa-solid fas fa-user icon-color"></i>
              </div>
            </Link>
            <Link to="/">
              {Object.keys(userState).length !== 0 && (
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
          <input
            onChange={(e) =>
              dispatch({ type: "SEARCH_FILTER", payload: e.target.value })
            }
            value={searchTerm}
            className="mobile-input"
            type="text"
            placeholder="Search"
          />
        )}
      </div>
    </nav>
  );
};
