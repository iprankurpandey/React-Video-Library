import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
function Header() {
  return (
    <div>
      <nav class="navigation-menu">
        <div class="left-side-panel" title="menu-item">
          <div class="menu">
            <span class="material-icons navmtrl">menu</span>
          </div>
          <p className="logo-text"> Agri Ui</p>

          <span class="home">
            <Link to="/">
              <span class="material-icons navmtrl">home</span>
            </Link>
          </span>
          <div class="favorites-item" title="favorite items">
            <span class="material-icons navmtrl">playlist_play</span>{" "}
          </div>
        </div>

        <div class="search-panel" title="search items">
          <input
            type="search"
            name="search"
            id="search"
            placeholder="search items"
            class="input-in-input"
          />

          <button class="btn btn-primary-outline">Logout</button>
        </div>

        <div class="right-side-panel">
          <div class="shopping-cart" title="shopping cart ">
            <Link to="/LikedVideo">
              <span class="material-icons navmtrl">smart_display</span>
            </Link>
          </div>

          <div class="user-account" title="your account details">
            <span class="material-icons navmtrl">account_circle</span>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
