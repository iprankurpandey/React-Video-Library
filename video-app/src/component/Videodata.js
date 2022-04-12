import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Videocard } from "./Videocard";
import { VideoListingContext } from "./context/VideoListContext";
import "./Videocard.css";
function Videodata() {
  const { videoList, setVideoList } = useContext(VideoListingContext);
  console.log(videoList);
  async function getVideoData() {
    try {
      await axios
        .get("/api/videos")
        .then((response) => setVideoList(response.data.videos));
    } catch (error) {
      console.log(`something went wrong `, error);
    }
  }
  useEffect(() => {
    getVideoData();
  }, []);

  return (
    <div className="videocard-style">
      {videoList.map((video) => (
        <Videocard key={video.id} video={video} />
      ))}
    </div>
  );
}

export default Videodata;
