import React from "react";
import Chips from "./Chips";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div>
      <aside className="aside">
        <div className="Home">
          <span class="material-icons mi" title="Home">
            home
          </span>{" "}
          Home
        </div>
        <div className="explore">
          <span class="material-icons mi" title="Explore">
            explore
          </span>
          Explore
        </div>
        <div className="playlists">
          <span class="material-icons mi" title="Playlists">
            queue
          </span>
          Playlists
        </div>
        <div className="likes">
          <span class="material-icons mi" title="Liked Video">
            thumb_up
          </span>
          Likes
        </div>
        <div className="watchlater">
          <span class="material-icons mi" title="History">
            watch_later
          </span>
          Watch Later
        </div>
        <div className="history">
          <span class="material-icons mi" title="History">
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
