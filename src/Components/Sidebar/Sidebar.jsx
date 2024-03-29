import { NavLink } from "react-router-dom";
import "./Sidebar.css";

export const Sidebar = () => {
  return (
    <ul className="sidebar-container">
      <div className="top-sidebar">
        <NavLink
          to="/videos"
          className={({ isActive }) => {
            return isActive ? "active" : "";
          }}
        >
          <span className="material-icons-outlined">explore</span>
        </NavLink>
        <NavLink
          to="/trending"
          className={({ isActive }) => {
            return isActive ? "active" : "";
          }}
        >
          <span className="material-icons-outlined">trending_up</span>
        </NavLink>
        <NavLink
          to="/watchlater"
          className={({ isActive }) => {
            return isActive ? "active" : "";
          }}
        >
          <span className="material-icons-outlined">watch_later</span>
        </NavLink>
        <NavLink
          to="/liked"
          className={({ isActive }) => {
            return isActive ? "active" : "";
          }}
        >
          <span className="material-icons-outlined">thumb_up</span>
        </NavLink>
        <NavLink
          to="/playlist"
          className={({ isActive }) => {
            return isActive ? "active" : "";
          }}
        >
          <span className="material-icons">playlist_play</span>
        </NavLink>
        <NavLink
          to="/history"
          className={({ isActive }) => {
            return isActive ? "active" : "";
          }}
        >
          <span className="material-icons">history</span>
        </NavLink>
      </div>
      <div className="bottom-sidebar">
        <a target="_blank" href="https://github.com/B0llu">
          <i className="fab fa-github"></i>
        </a>
        <a target="_blank" href="https://twitter.com/TheBestDhruv">
          <i className="fab fa-twitter"></i>
        </a>
      </div>
    </ul>
  );
};
