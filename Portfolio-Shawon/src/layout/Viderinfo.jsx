import React from "react";

const Viderinfo = () => {
  return (
    <div className="video-info-display-section section-gap-tb-165">
      <div className="video-info-display-box">
        <div className="container">
          <div className="video-info-display-wrapper">
            <div className="row align-items-center">
              <div className="col-xl-5 col-lg-6 col-md-6 col-sm-8 col-10 offset-1 offset-sm-2 offset-md-3 offset-lg-0">
                <div className="video-card">
                  <a
                    className="wave-btn"
                    href="https://youtu.be/MKjhBO2xQzg"
                    data-autoplay="true"
                    data-vbtype="video"
                  >
                    <div className="ripple">
                      <i className="icofont-ui-play" />
                    </div>
                  </a>
                  <a
                    href="#"
                    className="btn btn-xl btn-outline-one icon-space-left"
                  >
                    Get Resume <i className="icofont-download" />
                  </a>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-8 offset-md-2 offset-lg-0 offset-xl-1">
                <div className="video-info-content">
                  <h2 className="title">I’m Mirta Akins</h2>
                  <h3 className="sub-title">
                    UI/UX designer specializing in shopify &amp; webflow.
                  </h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    pesetting industry has been the industry's standard dummy
                    text ever since the 1500s, when an unkn own printer took
                    galley of type and scrambled.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Viderinfo;
