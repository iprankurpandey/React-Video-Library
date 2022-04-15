import React, { useContext, useEffect } from "react";
import { VideoListingContext } from "../component/context/VideoListContext";
import Footer from "../component/Footer";
import Header from "../component/Header";
import axios from "axios";
function LikedVideo() {
  const { watchLater } = useContext(VideoListingContext);

  return (
    <div>
      <Header />
      {watchLater.map((videodata) => {
        return (
          <iframe
            width="420"
            height="315"
            src={videodata.videoUrl}
            title="video watch later"
          ></iframe>
        );
        // return videodata.title;
      })}
      <Footer />
    </div>
  );
}

export default LikedVideo;
