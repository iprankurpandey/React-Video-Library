import React from "react";
import "./Hero.css";
function Hero() {
  return (
    <div>
      <div className="hero-section">
        <div className="hero-container">
          <div className="leftside">
            <button className="btn-vdo">explore</button>
          </div>
          <img src="https://svgshare.com/i/g73.svg" />
        </div>
      </div>

      <div class="catagory-choice">
        <div class="first-catagory box"> Technology</div>
        <div class="second-catagory box">Humor</div>
        <div class="third-catagory box">Religion</div>
        <div class="fourth-catagory box">Self Help</div>
      </div>
    </div>
  );
}

export default Hero;
