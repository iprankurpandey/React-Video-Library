import React, { useContext, useState } from "react";
import { VideoListingContext } from "../component/context/VideoListContext";
import Footer from "../component/Footer";
import Header from "../component/Header";

function LikesPage() {
  const { likeVideo } = useContext(VideoListingContext);
  //   const [likeVideo, setLikedVideo] = useState([]);

  return (
    <div>
      {" "}
      <Header />
      <div className="watch-later"> LIKED VIDEOS</div>
      <div className="watch-later-videos">
        {likeVideo.map((videodata) => {
          return (
            <iframe
              className="watch-later-iframe"
              width="420"
              height="315"
              src={videodata.videoUrl}
              title="video watch later"
            ></iframe>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default LikesPage;
