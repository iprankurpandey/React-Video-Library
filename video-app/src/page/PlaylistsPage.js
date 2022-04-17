import React, { useContext, useState } from "react";
import { VideoListingContext } from "../component/context/VideoListContext";
import Footer from "../component/Footer";
import Header from "../component/Header";
import axios from "axios";
function PlaylistsPage() {
  const { playlist, setPlaylist } = useContext(VideoListingContext);

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

  return (
    <div>
      <Header />
      <div className="watch-later"> PLAYLIST PAGE VIDEOS</div>
      <div className="watch-later-videos">
        {playlist.map((videodata) => {
          return (
            <div>
              <iframe
                className="watch-later-iframe"
                width="380"
                height="315"
                src={videodata.videoUrl}
                title="video watch later"
              ></iframe>
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
