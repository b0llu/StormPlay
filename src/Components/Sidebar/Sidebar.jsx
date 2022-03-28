import "./Sidebar.css";

export const Sidebar = () => {
  return (
    <ul className="sidebar-container">
      <div className="top-sidebar">
        <span className="material-icons">explore</span>
        <span className="material-icons">playlist_play</span>
        <span className="material-icons">watch_later</span>
        <span className="material-icons">thumb_up</span>
        <span className="material-icons">history</span>
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
