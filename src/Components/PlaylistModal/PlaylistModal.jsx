import "./PlaylistModal.css";

export const PlaylistModal = () => {
  return (
    <div className="playlistModal-wrapper">
      <div className="playlistModal">
        <div className="modal-title">
          <h1>Create New Playlist</h1>
          <span className="material-icons">close</span>
        </div>
        <div className="modal-input">
          <input maxLength="30" type="text" placeholder="Title of Playlist" />
          <input
            maxLength="30"
            type="text"
            placeholder="Description of Playlist"
          />
          <button>Create Playlist</button>
        </div>
      </div>
    </div>
  );
};
