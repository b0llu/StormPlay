import "./Header.css";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const location = useLocation();

  return (
    <nav>
      <div className="navbar">
        <Link className="name" to="/">
          <i className="fas fa-bolt"></i> StormPlay
        </Link>
        {location.pathname !== "/" && (
          <input className="header-input" placeholder="Search" type="text" />
        )}
        <div className="margin-left-auto">
          <div className="icon-container">
            {/* <p className="icon-color">username</p> */}
            <div className="badge">
              <i className="fa-solid fas fa-user icon-color"></i>
            </div>
            {/* <Link to="/" element={<LoginBox />}>
              {encodedToken && (
                <div onClick={() => signout()} className="badge">
                  <i className="fas fa-sign-out icon-color"></i>
                </div>
              )}
            </Link> */}
            <i id="toggle-theme" className="fas fa-moon icon icon-color"></i>
          </div>
        </div>
        {location.pathname !== "/" && (
          <input className="mobile-input" type="text" placeholder="Search" />
        )}
      </div>
    </nav>
  );
};
