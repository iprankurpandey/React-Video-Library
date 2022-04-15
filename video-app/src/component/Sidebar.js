import React from "react";
import Chips from "./Chips";
import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div>
      <aside className="aside">
        <div className="home">
          <Link to="/">
            <span className="material-icons mi" title="Home">
              home
            </span>
          </Link>
          Home
        </div>

        <div className="explore">
          <Link to="/VideoListing">
            <span className="material-icons mi" title="Explore">
              explore
            </span>
          </Link>
          Explore
        </div>
        <div className="playlists">
          <span className="material-icons mi" title="Playlists">
            queue
          </span>
          Playlists
        </div>

        <div className="likes">
          <Link to="/LikedVideo">
            <span className="material-icons mi" title="Liked Video">
              thumb_up
            </span>
          </Link>
          Likes
        </div>

        <div className="watchlater">
          <span className="material-icons mi" title="History">
            watch_later
          </span>
          Watch Later
        </div>
        <div className="history">
          <span className="material-icons mi" title="History">
            history
          </span>
          History
        </div>
      </aside>
      <Chips />
    </div>
  );
}

export default Sidebar;
