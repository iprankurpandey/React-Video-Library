import React, { useContext, useState } from "react";
import { VideoListingContext } from "../component/context/VideoListContext";
import Footer from "../component/Footer";
import Header from "../component/Header";
import axios from "axios";
function LikesPage() {
  const { setwatchLater, likeVideo, setLikedVideo } =
    useContext(VideoListingContext);

  const deleteLikedVideo = async (_id) => {
    console.log(localStorage.getItem("token"));
    const response = await axios({
      method: "DELETE",
      url: `/api/user/likes/${_id}`,
      headers: { authorization: localStorage.getItem("token") },
      data: { video: setLikedVideo },
    });
    console.log(response);
    setLikedVideo(response.data.likes);
  };

  return (
    <div>
      <Header />
      <div className="watch-later"> LIKED VIDEOS</div>
      <div className="watch-later-videos">
        {likeVideo.map((videodata) => {
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
                onClick={(_id) => deleteLikedVideo(videodata._id)}
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

export default LikesPage;
