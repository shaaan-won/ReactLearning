import React from "react";

const CompanyWorkWith = () => {
  return (
    <>
      <div className="company-logo-display section-mt-165 ">
        <div className="company-logo-display-box">
          <div className="container">
            <div className="row">
              <div className="col">
                {/* Start Section Content */}
                <div className="section-content pos-relative">
                  <span className="section-tag">Favourite Clients</span>
                  <h2 className="section-title">Work With Trusted Comapny.</h2>
                </div>
                {/* End Section Content */}
              </div>
            </div>
            <div className="company-logo-display-wrapper">
              <div className="row">
                <div className="col">
                  <div className="company-logo-display-slider">
                    {/* Slider main container */}
                    <div className="swiper-container">
                      {/* Additional required wrapper */}
                      <div className="swiper-wrapper">
                        {/* Start Company Logo Slider Single Item */}
                        <div className="company-logo-single-item swiper-slide">
                          <a href="#" className="image">
                            <img
                              src="assets/images/company-logo/company-logo-1.png"
                              alt
                            />
                            <img src="assets/images/company-logo/1.png" alt />
                          </a>
                        </div>
                        {/* End Company Logo Slider Single Item */}
                        {/* Start Company Logo Slider Single Item */}
                        <div className="company-logo-single-item swiper-slide">
                          <a href="#" className="image">
                            <img
                              src="assets/images/company-logo/company-logo-2.png"
                              alt
                            />
                            <img src="assets/images/company-logo/2.png" alt />
                          </a>
                        </div>
                        {/* End Company Logo Slider Single Item */}
                        {/* Start Company Logo Slider Single Item */}
                        <div className="company-logo-single-item swiper-slide">
                          <a href="#" className="image">
                            <img
                              src="assets/images/company-logo/company-logo-3.png"
                              alt
                            />
                            <img src="assets/images/company-logo/3.png" alt />
                          </a>
                        </div>
                        {/* End Company Logo Slider Single Item */}
                        {/* Start Company Logo Slider Single Item */}
                        <div className="company-logo-single-item swiper-slide">
                          <a href="#" className="image">
                            <img
                              src="assets/images/company-logo/company-logo-4.png"
                              alt
                            />
                            <img src="assets/images/company-logo/4.png" alt />
                          </a>
                        </div>
                        {/* End Company Logo Slider Single Item */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ...::: End Company Logo Display Section :::... */}
    </>
  );
};

export default CompanyWorkWith;
