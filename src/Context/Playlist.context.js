import axios from "axios";
import { createContext, useContext, useState } from "react";
import { AlertToast, SuccessToast } from "Components";

const PlaylistContext = createContext();

const PlaylistProvider = ({ children }) => {
  const encodedToken = localStorage.getItem("StormPlayToken");
  const [playlistModal, setPlaylistModal] = useState({
    state: false,
    video: {},
  });
  const [playlists, setPlaylists] = useState([]);

  const addVideoToPlaylist = async (playlistDetails) => {
    // creating new playlist
    try {
      const playlistResponse = await axios.post(
        "/api/user/playlists",
        {
          playlist: {
            title: playlistDetails.title,
            description: playlistDetails.description,
          },
        },
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );

      if (playlistResponse.status === 201) {
        // checking if add to playlist was clicked on video or not
        SuccessToast("Playlist Created")
        if (Object.keys(playlistModal.video).length === 0) {
          setPlaylists(playlistResponse.data.playlists);
        } else {
          // if it was clicked on video
          try {
            // taking the id of playlist in which video will go
            const response = await axios.post(
              `/api/user/playlists/${
                playlistResponse.data.playlists[
                  playlistResponse.data.playlists.length - 1
                ]._id
              }`,
              { video: playlistModal.video },
              {
                headers: {
                  authorization: encodedToken,
                },
              }
            );

            if (response.status === 201) {
              SuccessToast("Video Added To Playlist");
              // checking if playlist is empty or not
              if (playlists.length !== 0) {
                // checking if playlist is already in array or not
                const index = playlists.findIndex(
                  (p) => p._id === response.data.playlist._id
                );
                // playlist is not in array then
                if (index === -1) {
                  setPlaylists((p) => [...p, response.data.playlist]);
                } else {
                  // if its in array then
                  setPlaylists((ps) =>
                    ps.map((p) =>
                      p._id === response.data.playlist._id
                        ? response.data.playlist
                        : p
                    )
                  );
                }
                // if playlist is initially empty
              } else {
                setPlaylists([response.data.playlist]);
              }
            }
          } catch (error) {
            console.log(error);
          }
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const removePlaylist = async (id) => {
    try {
      const response = await axios.delete(`/api/user/playlists/${id}`, {
        headers: {
          authorization: encodedToken,
        },
      });
      if (response.status === 200) {
        setPlaylists(response.data.playlists);
        AlertToast('Playlist Deleted')
      }
    } catch (error) {
      console.log(error);
    }
  };

  const addVideo = async (playlistId) => {
    try {
      const response = await axios.post(
        `/api/user/playlists/${playlistId}`,
        { video: playlistModal.video },
        { headers: { authorization: encodedToken } }
      );
      if (response.status === 201) {
        setPlaylists((ps) =>
          ps.map((p) =>
            p._id === response.data.playlist._id ? response.data.playlist : p
          )
        );
        SuccessToast("Video Added To Playlist")
      }
    } catch (error) {
      console.log(error);
    }
  };

  const removeVideo = async (playlistId, videoId) => {
    if(!videoId) {
      try {
        const response = await axios.delete(
          `/api/user/playlists/${playlistId}/${playlistModal.video._id}`,
          { headers: { authorization: encodedToken } }
        );
        if (response.status === 200) {
          setPlaylists((ps) =>
            ps.map((p) =>
              p._id === response.data.playlist._id ? response.data.playlist : p
            )
          );
          AlertToast("Video Removed From Playlist")
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const response = await axios.delete(
          `/api/user/playlists/${playlistId}/${videoId}`,
          { headers: { authorization: encodedToken } }
        );
        if (response.status === 200) {
          setPlaylists((ps) =>
            ps.map((p) =>
              p._id === response.data.playlist._id ? response.data.playlist : p
            )
          );
          AlertToast("Video Removed From Playlist");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <PlaylistContext.Provider
      value={{
        playlistModal,
        setPlaylistModal,
        playlists,
        addVideoToPlaylist,
        removePlaylist,
        addVideo,
        removeVideo,
      }}
    >
      {children}
    </PlaylistContext.Provider>
  );
};

const usePlaylistContext = () => useContext(PlaylistContext);

export { usePlaylistContext, PlaylistProvider };
