import React, { useContext, useState } from "react";
import { VideoListingContext } from "../component/context/VideoListContext";
import Footer from "../component/Footer";
import Header from "../component/Header";
import axios from "axios";
import "./PlaylistsPage.css";
import { Link, useParams } from "react-router-dom";
function PlaylistsPage() {
  const { playlists, setPlaylists } = useContext(VideoListingContext);

  return (
    <div>
      <Header />
      <div className="watch-later"> PLAYLIST PAGE VIDEOS</div>

      <div className="watch-later-videos">
        {playlists?.map((playlist) => {
          return (
            <div>
              <Link to={`/Playlists/${playlist._id}`}>
                <div className="watchlatercard">
                  <div className="watchlater-container">
                    {playlist.playlistName}
                    <span class="material-icons pmi">playlist_add_check</span>
                  </div>
                </div>
              </Link>

              <span
                // onClick={(_id) => deletePlaylist(videodata._id)}
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
