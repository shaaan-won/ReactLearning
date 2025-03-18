import React from "react";

const Footer = () => {
  return (
    <footer className="tm-overflow-hidden">
      <div className="tm-gray-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="tm-footer-social">
                <h2>Follow Us</h2>
                <div className="tm-footer-social-list">
                  <a href="#" className="tm-social-btn blue">
                    <i className="fa fa-facebook-square" />
                    <i className="fa fa-facebook-square" />
                  </a>
                  <a href="#" className="tm-social-btn blue">
                    <i className="fa fa-google-plus-square" />
                    <i className="fa fa-google-plus-square" />
                  </a>
                  <a href="#" className="tm-social-btn blue">
                    <i className="fa fa-twitter-square" />
                    <i className="fa fa-twitter-square" />
                  </a>
                  <a href="#" className="tm-social-btn blue">
                    <i className="fa fa-linkedin-square" />
                    <i className="fa fa-linkedin-square" />
                  </a>
                  <a href="#" className="tm-social-btn blue">
                    <i className="fa fa-skype" />
                    <i className="fa fa-skype" />
                  </a>
                </div>
              </div>
            </div>
            {/* .col */}
          </div>
        </div>
      </div>
      <div className="tm-site-footer">
        <div className="container">
          {/* row-md-reverce */}
          <div className="row row-sm-reverce">
            <div className="col-md-7 col-lg-8">
              <p className="tm-copyright">
                Copyright © 2018 TRUSTLIFE. Designed by thememarch
              </p>
            </div>
            {/* .col */}
            <div className="col-md-5 col-lg-4">
              <div className="tm-footer-hotline">
                <div className="tm-footer-hotline-in">
                  <div className="tm-phone-icon">
                    <i className="fa fa-mobile" />
                  </div>
                  <h3>Toll Free</h3>
                  <p>1-800-915-6270</p>
                </div>
              </div>
            </div>
            {/* .col */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
