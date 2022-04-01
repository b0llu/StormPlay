import "./PlaylistCard.css";

export const PlaylistCard = () => {
  return (
    <div className="playlistCard-container">
      <div className="create-playlist-container">
        <div className="create-playlist"></div>
        <span className="material-icons">playlist_add</span>
      </div>
      <div className="playlists">
        <div className="create-playlist"></div>
        <div className="playlist-info">
          <h1>Title</h1>
          <p>description</p>
          <div className="for-column">
            <p>0 videos</p>
            <span className="material-icons">playlist_remove</span>
          </div>
        </div>
      </div>
    </div>
  );
};
