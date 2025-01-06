import React from "react";

const Testimoniial = () => {
  return (
    <div className="counter-display-section section-gap-tb-165 section-bg-2">
      <div className="counter-display-wrapper">
        <div className="container">
          <div className="row justify-content-center justify-content-sm-start">
            <div className="d-block d-md-flex justify-content-md-start col-12 col-sm-4 col-md-4">
              {/* Start Counterup Single Item */}
              <div className="counterup-single-item">
                <div className="icon">
                  <img src="assets/images/icon/counterup-icon-1.png" alt />
                </div>
                <div className="content">
                  <h2 className="number">
                    <span className="counter">2,58</span>+
                  </h2>
                  <span className="text">Happy Clients</span>
                </div>
              </div>
              {/* End Counterup Single Item */}
            </div>
            <div className="d-block d-md-flex justify-content-md-center col-12 col-sm-4 col-md-4">
              {/* Start Counterup Single Item */}
              <div className="counterup-single-item">
                <div className="icon">
                  <img src="assets/images/icon/counterup-icon-2.png" alt />
                </div>
                <div className="content">
                  <h2 className="number">
                    <span className="counter">590</span>K
                  </h2>
                  <span className="text">Project Complete</span>
                </div>
              </div>
              {/* End Counterup Single Item */}
            </div>
            <div className="d-block d-md-flex justify-content-md-end col-12 col-sm-4 col-md-4">
              {/* Start Counterup Single Item */}
              <div className="counterup-single-item">
                <div className="icon">
                  <img src="assets/images/icon/counterup-icon-3.png" alt />
                </div>
                <div className="content">
                  <h2 className="number">
                    <span className="counter">28</span>+
                  </h2>
                  <span className="text">Years of Experience</span>
                </div>
              </div>
              {/* End Counterup Single Item */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimoniial;
