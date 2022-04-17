import React, { useContext, useState } from "react";
import { VideoListingContext } from "../component/context/VideoListContext";
import Footer from "../component/Footer";
import Header from "../component/Header";
import axios from "axios";
import "./PlaylistsPage.css";
import { Link, useParams } from "react-router-dom";
function PlaylistsPage() {
  const { playlist, setPlaylist } = useContext(VideoListingContext);
  console.log(playlist);

  const deletePlaylist = async (_id) => {
    console.log(localStorage.getItem("token"));
    const response = await axios({
      method: "DELETE",
      url: `/api/user/playlists/${_id}`,
      headers: { authorization: localStorage.getItem("token") },
      data: { video: setPlaylist },
    });
    console.log(response);
    setPlaylist(response.data.playlists);
  };

  async function getPlaylistsdata(_id) {
    const response = await axios({
      method: "GET",
      url: `/api/user/playlists`,
      headers: { authorization: localStorage.getItem("token") },
      data: { video: setPlaylist },
    });
    console.log(response);
    setPlaylist(response.data.playlists);
  }

  const params = useParams();
  console.log(params);
  return (
    <div>
      <Header />
      <div className="watch-later"> PLAYLIST PAGE VIDEOS</div>

      <div className="watch-later-videos" onClick={getPlaylistsdata}>
        {playlist?.map((videodata) => {
          return (
            <div>
              <Link to={`/Playlists/${videodata._id}`}>
                <div className="watchlatercard">
                  <div className="watchlater-container">
                    {videodata.playlistName}
                    <span class="material-icons pmi">playlist_add_check</span>
                  </div>
                </div>{" "}
              </Link>

              {/* <iframe
                className="watch-later-iframe"
                width="380"
                height="315"
                src={videodata.videoUrl}
                title="video watch later"
              ></iframe> */}
              <span
                onClick={(_id) => deletePlaylist(videodata._id)}
                class="material-icons xi"
              >
                delete
              </span>
            </div>
          );
        })}
      </div>

      <Footer />
    </div>
  );
}

export default PlaylistsPage;
