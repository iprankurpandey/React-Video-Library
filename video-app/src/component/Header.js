import React from "react";
import "./Header.css";
function Header() {
  return (
    <div>
      <nav class="navigation-menu">
        <div class="left-side-panel" title="menu-item">
          <div class="menu">
            <a href="/index.html">
              <span class="material-icons navmtrl">menu</span>
            </a>
          </div>
          <p className="logo-text"> Agri Ui</p>
          {/* <img
            src="https://i.ibb.co/BwmMLhj/logo.png"
            alt="logo"
            class="logo-icon-head"
          /> */}
          <span class="home">
            <span class="material-icons navmtrl">home</span>
          </span>
        </div>

        <div class="search-panel" title="search items">
          <input
            type="search"
            name="search"
            id="search"
            placeholder="search items"
            class="input-in-input"
          />
          <a href="/index.html">
            <button class="btn btn-primary-outline">Logout</button>
          </a>
        </div>

        <div class="right-side-panel">
          <div class="shopping-cart" title="shopping cart ">
            <a href="/pages/cart.html">
              <span class="material-icons navmtrl">smart_display</span>
            </a>
          </div>
          {/* <span class="number-badge lg-number-badge">9+</span> */}

          <div class="favorites-item" title="favorite items">
            <a href="/pages/product.html">
              <span class="material-icons navmtrl">favorite_border</span>{" "}
            </a>
          </div>
          {/* <span class="number-badge lg-number-badge">5</span> */}
          <div class="user-account" title="your account details">
            <span class="material-icons navmtrl">account_circle</span>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
