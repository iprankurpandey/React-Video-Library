import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";
function Hero() {
  return (
    <div>
      <div className="hero-section">
        <div className="hero-container">
          <div className="leftside">
            <Link to="/VideoListing">
              <button className="btn-vdo">explore</button>
            </Link>
          </div>

          <img
            className="hero-img"
            src="https://svgshare.com/i/g73.svg"
            alt="logo"
          />
        </div>
      </div>

      <div class="catagory-choice">
        <div class="first-catagory box"> Technology</div>
        <div class="second-catagory box">Comedy</div>
        <div class="third-catagory box">Tedx</div>
        <div class="fourth-catagory box">Coding</div>
      </div>
    </div>
  );
}

export default Hero;
