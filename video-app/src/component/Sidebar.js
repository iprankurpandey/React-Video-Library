import React from "react";
import Chips from "./Chips";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div>
      <aside className="aside">
        <span class="material-icons mi" title="Home">
          home
        </span>
        <span class="material-icons mi" title="Explore">
          explore
        </span>
        <span class="material-icons mi" title="Playlists">
          queue
        </span>
        <span class="material-icons mi" title="Liked Video">
          thumb_up
        </span>
        <span class="material-icons mi" title="History">
          watch_later
        </span>
      </aside>
      <Chips />
    </div>
  );
}

export default Sidebar;
