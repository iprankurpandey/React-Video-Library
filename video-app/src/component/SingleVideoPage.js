import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import "./SingleVideoPage.css";
import { VideoListingContext } from "./context/VideoListContext";

function SingleVideoPage() {
  const [singleVideo, setSingleVideo] = useState([]);
  const { likeVideo, setLikedVideo, playlist, setPlaylist } =
    useContext(VideoListingContext);

  console.log(singleVideo);
  const [input, setInput] = useState([]);
  const [show, setShow] = useState("none");
  const params = useParams();
  console.log(params._id);

  useEffect(() => {
    axios
      .get(`/api/video/${params._id}`)
      .then((response) => setSingleVideo(response.data.video));
  }, []);

  const likedVideo = async (singleVideo, setLikedVideo) => {
    const response = await axios({
      method: "POST",
      url: `/api/user/likes`,
      headers: { authorization: localStorage.getItem("token") },
      data: { video: singleVideo },
    });
    console.log(response);
    setLikedVideo(response.data.likes);
  };

  function btnmodel() {
    setShow(show === "none" ? "block" : "none");
  }

  async function postPlaylist(playlist, setPlaylist) {
    const response = await axios({
      method: "POST",
      url: `/api/user/playlists`,
      headers: { authorization: localStorage.getItem("token") },
      data: {
        playlist: { playlistName: input },
      },
    });
    console.log(response);
    setPlaylist(response.data.playlists);
  }

  const postPlaylistVideo = async (id, data) => {
    const response = await axios({
      method: "POST",
      url: `/api/user/playlists/${id}`,
      headers: { authorization: localStorage.getItem("token") },
      data: { video: data },
    });
    console.log(response);
    setPlaylist(response.data.playlists);
  };

  return (
    <div>
      <Header />
      <Link to="/VideoListing">
        <span className="material-icons mib">arrow_back</span>
        Back to Video Listing
      </Link>
      <div className="single-video-container">
        <iframe
          className="video-component"
          src={singleVideo.videoUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="video-icons">
        <div className="creator-pic">
          <img src={singleVideo.creator_pic} alt="image1" />
        </div>
        <button
          className="likebtn"
          onClick={() => likedVideo(singleVideo, setLikedVideo)}
        >
          <span className="material-icons one mib">thumb_up</span>
        </button>

        <button className="likebtn" onClick={btnmodel}>
          <span className="material-icons one mib">playlist_add</span>
        </button>
      </div>
      <div className="modal-item" style={{ display: show }}>
        <input
          className="input-modal"
          placeholder="playlist name"
          onChange={(e) => setInput(e.target.value)}
        />

        <span
          class="material-icons add"
          onClick={() => postPlaylist(playlist, setPlaylist)}
        >
          add
        </span>

        {playlist?.map((play1) => {
          return (
            <div>
              <input
                type="checkbox"
                onChange={() => postPlaylistVideo(play1._id, singleVideo)}
              />{" "}
              {play1.playlistName}
            </div>
          );
        })}
      </div>
      <hr />
      <div className="video-description"> {singleVideo.description}</div>
      <Footer />
    </div>
  );
}

export default SingleVideoPage;
