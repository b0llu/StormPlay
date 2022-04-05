import axios from "axios";
import "./IndividualPlaylistPage.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { usePlaylistContext, useReducerContext } from "Context";
import { Loader, VideoCard } from "Components";

export const IndividualPlaylistPage = () => {
  const encodedToken = localStorage.getItem("StormPlayToken");
  const [playlist, setPlaylist] = useState({ name: "", videos: [] });
  const { loading, dispatch } = useReducerContext();
  const { playlistId } = useParams();
  const { playlists } = usePlaylistContext();

  useEffect(() => {
    (async function () {
      dispatch({ type: "LOADING" });
      try {
        const response = await axios.get(`/api/user/playlists/${playlistId}`, {
          headers: { authorization: encodedToken },
        });
        if (response.status === 200) {
          setPlaylist({
            name: response.data.playlist.title,
            videos: response.data.playlist.videos,
          });
          dispatch({ type: "LOADING" });
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, [playlists]);

  return (
    <section>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="individual-playlist-header">
            <h1>{playlist.name}</h1>
          </div>
          <div className="individual-playlist-video-container">
            {playlist.videos.map((v) => (
              <VideoCard key={v._id} video={v} />
            ))}
          </div>
        </>
      )}
    </section>
  );
};
