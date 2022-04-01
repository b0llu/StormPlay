import { usePlaylistContext } from "../../../../Context";
import "./PlaylistCard.css";

export const PlaylistCard = () => {
  const { setPlaylistModal, playlists, removePlaylist, playlistModal } =
    usePlaylistContext();

  return (
    <div className="playlistCard-container">
      <div className="create-playlist-container">
        <div className="create-playlist"></div>
        <span
          onClick={() =>
            setPlaylistModal({ state: true, video: {} })
          }
          className="material-icons"
        >
          playlist_add
        </span>
      </div>
      {playlists &&
        playlists.map((playlist) => {
          return (
            <div key={playlist._id} className="playlists">
              <div className="create-playlist"></div>
              <div className="playlist-info">
                <h1>{playlist.title}</h1>
                <p>{playlist.description}</p>
                <div className="for-column">
                  <p>{playlist.videos.length} videos</p>
                  <span
                    onClick={() => removePlaylist(playlist._id)}
                    className="material-icons"
                  >
                    playlist_remove
                  </span>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};
