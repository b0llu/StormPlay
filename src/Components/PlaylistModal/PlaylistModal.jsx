import { useState } from "react";
import { usePlaylistContext } from "../../Context";
import "./PlaylistModal.css";

export const PlaylistModal = () => {
  const { playlists, playlistModal, setPlaylistModal, addVideoToPlaylist } =
    usePlaylistContext();
  const [playlistDetails, setPlaylistDetails] = useState({
    title: "",
    description: "",
  });

  return (
    <div className={`playlistModal-wrapper ${playlistModal.state && "flex"}`}>
      <div className="playlistModal">
        <div className="modal-title">
          <h1>Create New Playlist</h1>
          <span
            onClick={() => setPlaylistModal({ state: false, video: {} })}
            className="material-icons"
          >
            close
          </span>
        </div>
        {playlists.length !== 0 && (
          <div className="available-playlists">
            {playlists.map((playlist) => {
              return (
                <h1
                  key={playlist._id}
                  className={`${
                    playlist.videos.findIndex(
                      (v) => v._id === playlistModal.video._id
                    ) !== -1 && "already-added"
                  }`}
                >
                  {playlist.title}
                </h1>
              );
            })}
          </div>
        )}
        <div className="modal-input">
          <input
            onChange={(e) =>
              setPlaylistDetails({ ...playlistDetails, title: e.target.value })
            }
            value={playlistDetails.title}
            maxLength="30"
            type="text"
            placeholder="Title of Playlist"
            autoFocus
          />
          <input
            onChange={(e) =>
              setPlaylistDetails({
                ...playlistDetails,
                description: e.target.value,
              })
            }
            value={playlistDetails.description}
            maxLength="30"
            type="text"
            placeholder="Description of Playlist"
          />
          <button
            onClick={() => {
              addVideoToPlaylist(playlistDetails);
              setPlaylistDetails({ title: "", description: "" });
            }}
          >
            Create Playlist
          </button>
        </div>
      </div>
    </div>
  );
};
