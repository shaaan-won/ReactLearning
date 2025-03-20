import React from "react";
import Navbar from "../components/Navbar";

const Header = () => {
  return (
    <header className="tm-header3">
      <div className="tm-site-header">
        <div className="tm-header-info-wrap">
          <div className="container tm-header-info">
            <a href="#">
              <i className="fa fa-phone" />
              1-800-915-6270
            </a>
            <a href="#">
              <i className="fa fa-envelope" />
              info@trustlife.com
            </a>
          </div>
        </div>
        <div className="tm-header-menu">
          <div className="container tm-header-menu-container">
            <div className="tm-site-branding">
              {/* For Image Logo */}
              <a href="index.html" className="tm-logo-link">
                <img src="assets/img/logo.png" alt="logo" className="tm-logo" />
              </a>
              {/* For Site Title */}
              {/* <span class="tm-site-title">
                  <a href="index.html">Trustlife</a>
                  </span> */}
            </div>
            <Navbar />
          </div>
          {/* .tm-header-menu-container */}
        </div>
        {/* .tm-header-menu */}
      </div>
      {/* .tm-site-header */}
    </header>
  );
};

export default Header;
