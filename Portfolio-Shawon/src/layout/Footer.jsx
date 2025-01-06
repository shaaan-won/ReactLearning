import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer-section section-bg overflow-hidden pos-relative">
        <div className="footer-inner-shape-top-left" />
        <div className="footer-inner-shape-top-right" />
        <div className="footer-section-top section-gap-t-165">
          <div className="container">
            <div className="row">
              <div className="col-12">
                {/* Start Section Content */}
                <div className="section-content pos-relative text-center">
                  <span className="section-tag">Get Latest Updates</span>
                  <h2 className="section-title">Subscribe For Newsletter</h2>
                </div>
                {/* End Section Content */}
              </div>
            </div>
            <div className="footer-top-wrapper text-center">
              <div className="row">
                <div className="col-12">
                  <form action="#" className="footer-newsletter">
                    <input type="email" placeholder="demo@example.com" />
                    <button className="submit-btn" type="submit">
                      Subscribe Now
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-center section-gap-tb-165">
          <div className="container">
            <div className="row justify-content-between align-items-center mb-n5">
              <div className="col-auto mb-5">
                {/* Start Single Footer Info */}
                <div className="footer-single-info">
                  <a href="tel:+0123456789" className="info-box">
                    <span className="icon">
                      <i className="icofont-phone" />
                    </span>
                    <span className="text">0123456789</span>
                  </a>
                </div>
                {/* Start Single Footer Info */}
              </div>
              <div className="col-auto mb-5">
                {/* Start Single Footer Info */}
                <div className="footer-single-info">
                  <a href="mailto:demo@example.com" className="info-box">
                    <span className="icon">
                      <i className="icofont-envelope-open" />
                    </span>
                    <span className="text">demo@example.com</span>
                  </a>
                </div>
                {/* Start Single Footer Info */}
              </div>
              <div className="col-auto mb-5">
                {/* Start Single Footer Info */}
                <div className="footer-single-info">
                  <ul className="social-link">
                    <li>
                      <a href="https://www.example.com" target="_blank">
                        <i className="icofont-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.example.com" target="_blank">
                        <i className="icofont-dribbble" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.example.com" target="_blank">
                        <i className="icofont-linkedin" />
                      </a>
                    </li>
                  </ul>
                </div>
                {/* Start Single Footer Info */}
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row justify-content-center justify-content-md-between align-items-center flex-column-reverse flex-md-row">
              <div className="col-auto">
                <div className="footer-copyright">
                  <p className="copyright-text">
                    © 2021 <a href="index.html">Lendex</a> Made with{" "}
                    <i className="icofont-heart" /> by{" "}
                    <a href="https://hasthemes.com/" target="_blank">
                      HasThemes
                    </a>{" "}
                  </p>
                </div>
              </div>
              <div className="col-auto">
                <a href="index.html" className="footer-logo">
                  <div className="logo">
                    <img src="assets/images/logo/logo.png" alt />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
