import React, { useContext } from "react";
import { VideoListingContext } from "../component/context/VideoListContext";
import Footer from "../component/Footer";
import Header from "../component/Header";

import "./WatchLaterVideos.css";
function WatchLaterVideos() {
  const { watchLater } = useContext(VideoListingContext);

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
              <span class="material-icons">delete</span>
            </div>
          );
        })}
      </div>

      <Footer />
    </div>
  );
}

export { WatchLaterVideos };
