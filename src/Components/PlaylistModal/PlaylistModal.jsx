import { useState } from "react";
import { usePlaylistContext } from "../../Context";
import "./PlaylistModal.css";

export const PlaylistModal = () => {
  const { playlistModal, setPlaylistModal } = usePlaylistContext();
  const [playlistDetails, setPlaylistDetails] = useState({
    title: "",
    description: "",
  });

  return (
    <div className={`playlistModal-wrapper ${playlistModal && "flex"}`}>
      <div className="playlistModal">
        <div className="modal-title">
          <h1>Create New Playlist</h1>
          <span
            onClick={() => setPlaylistModal(false)}
            className="material-icons"
          >
            close
          </span>
        </div>
        <div className="modal-input">
          <input
            onChange={(e) =>
              setPlaylistDetails({ ...playlistDetails, title: e.target.value })
            }
            maxLength="30"
            type="text"
            placeholder="Title of Playlist"
          />
          <input
            onChange={(e) =>
              setPlaylistDetails({
                ...playlistDetails,
                description: e.target.value,
              })
            }
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
