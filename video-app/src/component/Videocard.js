import React from "react";
import { Link } from "react-router-dom";
import Sidevideolist from "./Sidevideolist";
import "./Videocard.css";
function Videocard({ video }) {
  const { _id, title, thumbnailUrl, creator_pic, videoUrl } = video;

  return (
    <div>
      <div className="video-card-item" key={_id}>
        <div className="video-card">
          <div className="video-card-image">
            <iframe
              width="350"
              height="200"
              src={videoUrl}
              title="band bajao"
            ></iframe>
          </div>

          <div className="video-card-details">
            <div className="video-card-logo">
              <img src={creator_pic} alt="logo" />
            </div>
            <Link to={`/VideoListing/${_id}`}>
              <h4 className="video-card-title"> {title}</h4>
            </Link>
            <h3 className="video-card-more-btn">
              <span class="material-icons vcardmi">more_horiz</span>
            </h3>
          </div>

          <div className="video-btn">
            <button className="show">
              <span class="material-icons vmi">watch_later</span> WATCH LATER
            </button>

            <button className="show">
              <span class="material-icons vmi">queue</span>ADD TO PLAYLIST
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Videocard };
