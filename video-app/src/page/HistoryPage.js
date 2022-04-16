import React, { useContext } from "react";
import { VideoListingContext } from "../component/context/VideoListContext";
import Footer from "../component/Footer";
import Header from "../component/Header";

function HistoryPage() {
  const { history } = useContext(VideoListingContext);
  return (
    <div>
      <Header />
      <div className="watch-later"> HISTORY </div>
      <div className="watch-later-videos">
        {history.map((videodata) => {
          return (
            <div>
              <iframe
                className="watch-later-iframe"
                width="380"
                height="315"
                src={videodata.videoUrl}
                title="video watch later"
              ></iframe>
              {/* <span
                onClick={(_id) => deleteWatchLaterVideo(videodata._id)}
                class="material-icons xi"
              >
                delete
              </span> */}
            </div>
          );
        })}
      </div>

      <Footer />
    </div>
  );
}

export default HistoryPage;
