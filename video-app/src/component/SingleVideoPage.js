import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import "./SingleVideoPage.css";

function SingleVideoPage() {
  const [singleVideo, setSingleVideo] = useState([]);
  const params = useParams();
  console.log(params);
  useEffect(() => {
    axios
      .get(`/api/video/${params._id}`)
      .then((response) => setSingleVideo(response.data.video));
  }, []);

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

        <button>
          <span className="material-icons one mib">thumb_up</span>
        </button>
        <span className="material-icons one mib">playlist_add</span>
        <span className="material-icons one mib">share</span>
      </div>
      <hr />
      <div className="video-description"> {singleVideo.description}</div>

      <Footer />
    </div>
  );
}

export default SingleVideoPage;
