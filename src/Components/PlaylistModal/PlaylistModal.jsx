import { useState } from "react";
import {
  usePlaylistContext,
  useReducerContext,
  useWatchLaterContext,
} from "Context";
import "./PlaylistModal.css";
import { AlertToast } from "Components";

export const PlaylistModal = () => {
  const {
    playlists,
    playlistModal,
    setPlaylistModal,
    addVideoToPlaylist,
    addVideo,
    removeVideo,
  } = usePlaylistContext();
  const { watchLater } = useReducerContext();
  const { addToWatchLater, removeFromWatchLater } = useWatchLaterContext();
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
        <div className="available-playlists">
          {Object.keys(playlistModal.video).length !== 0 ? (
            <label>
              <input
                checked={
                  watchLater.findIndex(
                    (v) => v._id === playlistModal.video._id
                  ) !== -1
                }
                type="checkbox"
                onChange={() => {
                  if (
                    watchLater.findIndex(
                      (v) => v._id === playlistModal.video._id
                    ) !== -1
                  ) {
                    removeFromWatchLater(playlistModal.video._id);
                  } else {
                    addToWatchLater(playlistModal.video);
                  }
                }}
              />
              Watch Later
            </label>
          ) : (
            <label onClick={() => AlertToast("No Video Selected")}>
              <input checked={false} onChange={() => {}} type="checkbox" />
              Watch Later
            </label>
          )}
          {playlists.map((playlist) => {
            return Object.keys(playlistModal.video).length !== 0 ? (
              <label key={playlist._id}>
                <input
                  checked={
                    playlist.videos.findIndex(
                      (v) => v._id === playlistModal.video._id
                    ) !== -1
                  }
                  value={playlist._id}
                  type="checkbox"
                  onChange={(e) => {
                    if (
                      playlist.videos.findIndex(
                        (v) => v._id === playlistModal.video._id
                      ) !== -1
                    ) {
                      removeVideo(e.target.value);
                    } else {
                      addVideo(e.target.value);
                    }
                  }}
                />
                {playlist.title}
              </label>
            ) : (
              <label
                onClick={() => AlertToast("No Video Selected")}
                key={playlist._id}
              >
                <input checked={false} onChange={() => {}} type="checkbox" />
                {playlist.title}
              </label>
            );
          })}
        </div>
        <div className="modal-input">
          <input
            onChange={(e) =>
              setPlaylistDetails({ ...playlistDetails, title: e.target.value })
            }
            value={playlistDetails.title}
            maxLength="12"
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
            maxLength="15"
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
