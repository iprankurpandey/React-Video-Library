import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../component/Header";
import Footer from "../component/Footer";
import { VideoListingContext } from "../component/context/VideoListContext";
function PlaylistviewPage() {
  const [playlistview, setPlaylistview] = useState([]);
  // const { newplaylist, setnewplaylist } = useContext(VideoListingContext);

  console.log(playlistview);
  const params = useParams();

  async function getPlaylistData() {
    const response = axios({
      method: "GET",
      url: `/api/user/playlists/${params._id}`,
      headers: { authorization: localStorage.getItem("token") },
      // data: { playlist: videos },
    });
    response.then((res) => {
      console.log(res);
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
      {playlistview?.map((play) => {
        return (
          <div>
            <iframe
              className="video-component"
              src={play.videoUrl}
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
