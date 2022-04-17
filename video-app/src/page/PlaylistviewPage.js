import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../component/Header";
import Footer from "../component/Footer";

function PlaylistviewPage() {
  const [playlistview, setPlaylistview] = useState([]);

  const params = useParams();

  async function getPlaylistData() {
    const response = await axios({
      method: "GET",
      url: `/api/user/playlists/${params._id}`,
      headers: { authorization: localStorage.getItem("token") },
    });
    setPlaylistview(response.data.playlist.videos);
  }

  useEffect(() => {
    getPlaylistData();
  }, []);

  return (
    <div>
      <Header />
      <div className="watch-later"> PLAYLIST PAGE VIDEOS</div>
      {playlistview?.map((videoData) => {
        return (
          <div>
            <h3>{videoData.title}</h3>
            <iframe
              className="video-component"
              src={videoData.videoUrl}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        );
      })}
      <Footer />
    </div>
  );
}

export default PlaylistviewPage;
