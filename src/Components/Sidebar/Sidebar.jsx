import { useLocation } from "react-router-dom";
import "./Sidebar.css";

export const Sidebar = () => {
  const location = useLocation();

  return (
    <ul className="sidebar-container">
      <div className="top-sidebar">
        <span
          className={`material-icons ${
            location.pathname === "/videos" && "active"
          }`}
        >
          explore
        </span>
        <span className={`material-icons ${
            location.pathname === "/trending" && "active"
          }`}>trending_up</span>
        <span className={`material-icons ${
            location.pathname === "/watchlater" && "active"
          }`}>watch_later</span>
        <span className={`material-icons ${
            location.pathname === "/liked" && "active"
          }`}>thumb_up</span>
        <span className={`material-icons ${
            location.pathname === "/playlist" && "active"
          }`}>playlist_play</span>
        <span className={`material-icons ${
            location.pathname === "/history" && "active"
          }`}>history</span>
      </div>
      <div className="bottom-sidebar">
        <a href="https://github.com/B0llu">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://twitter.com/TheBestDhruv">
          <i className="fab fa-twitter"></i>
        </a>
      </div>
    </ul>
  );
};
