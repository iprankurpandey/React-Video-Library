import React, { useContext } from "react";
import { VideoListingContext } from "../component/context/VideoListContext";
import Footer from "../component/Footer";
import Header from "../component/Header";
import axios from "axios";

import "./WatchLaterVideos.css";
function WatchLaterVideos() {
  const { watchLater, setwatchLater } = useContext(VideoListingContext);

  const deleteWatchLaterVideo = async (_id) => {
    const response = await axios({
      method: "DELETE",
      url: `/api/user/watchlater/${_id}`,
      headers: { authorization: localStorage.getItem("token") },
      data: { video: setwatchLater },
    });
    console.log(response);
    setwatchLater(response.data.watchlater);
  };

  return (
    <div>
      <Header />
      <div className="watch-later"> WATCH LATER VIDEOS</div>
      <div className="watch-later-videos">
        {watchLater.map((videodata) => {
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
                onClick={(_id) => deleteWatchLaterVideo(videodata._id)}
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

export { WatchLaterVideos };
