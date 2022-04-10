import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div>
      <footer className="footer-items">
        <div className="h4">
          Made with <code>&lt; /&gt;</code>by Prankur Pandey{"{"}" "{"}"}
        </div>
        <div className="social-media-links">
          <div className="github">
            <i className="fa fa-github" />
          </div>
          <div className="twitter">
            <i className="fa fa-twitter" />
          </div>
          <div className="Linkedin">
            <i className="fa fa-linkedin" />
          </div>
        </div>
        <div className="H5">© 2022 Agri UI </div>
      </footer>
    </div>
  );
}

export default Footer;
