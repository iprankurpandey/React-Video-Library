import React from "react";
import "./Videocard.css";
function Videocard({ video }) {
  const { title, catagory, thumbnailUrl, creator_pic, videoUrl } = video;
  console.log(video);

  return (
    <div>
      <div className="video-card-item">
        <div className="video-card">
          <div className="video-card-image">
            <img src={thumbnailUrl} alt="react" />
          </div>
          <div className="video-card-details">
            <div className="video-card-logo">
              <img src={creator_pic} alt="logo" />
            </div>
            <h4 className="video-card-title"> {title}</h4>
            <h3 className="video-card-more-btn">
              <span class="material-icons vcardmi">more_horiz</span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Videocard };
