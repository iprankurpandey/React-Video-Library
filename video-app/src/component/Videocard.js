import React from "react";
import "./Videocard.css";
function Videocard({ video }) {
  const { id, title, catagory, thumbnailUrl, creator_pic, videoUrl } = video;
  const url = "www.youtube.com/embed/0KNk-Joi-NM?list=RD0KNk-Joi-NM";
  console.table(videoUrl);
  return (
    <div>
      <div className="video-card-item">
        <div className="video-card">
          <div className="video-card-image">
            <div class="box1">Hover over me.</div>
            <div class="box2">
              I am shown when someone hovers over the div above.
              <iframe
                width="350"
                height="240"
                src={videoUrl}
                // src="https://www.youtube.com/embed/tgbNymZ7vqY"
                title="band bajao"
              ></iframe>
            </div>
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
