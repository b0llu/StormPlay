import axios from "axios";
import { createContext, useContext, useState } from "react";

const PlaylistContext = createContext();

const PlaylistProvider = ({ children }) => {
  const encodedToken = localStorage.getItem("StormPlayToken");
  const [playlistModal, setPlaylistModal] = useState(false);

  const addPlaylist = (playlistDetails) => {
    try {
      const response = axios.post(
        "/api/user/playlists",
        {
          headers: {
            authorization: encodedToken,
          },
        },
        {
          playlist: {
            title: playlistDetails.title,
            description: playlistDetails.description,
          },
        }
      );
      console.log(response)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <PlaylistContext.Provider value={{ playlistModal, setPlaylistModal }}>
      {children}
    </PlaylistContext.Provider>
  );
};

const usePlaylistContext = () => useContext(PlaylistContext);

export { usePlaylistContext, PlaylistProvider };
