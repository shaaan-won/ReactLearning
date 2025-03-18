import React from "react";

const About = () => {
  return (
    <section id="about">
      <div className="empty-space col-md-b100 col-xs-b70" />
      <div className="tm-section-heading text-center">
        <h2>Who We Are</h2>
        <div className="tm-section-seperator">
          <span />
        </div>
        <div className="empty-space col-md-b60 col-xs-b40" />
      </div>
      <div className="tm-relative">
        <div className="tm-half-section-bg left">
          <img src="assets/img/about-hafl-bg.jpg" alt="about hafl bg" />
        </div>
        <div className="empty-space col-xs-b60" />
        <div className="container">
          <div className="row row-md-reverce">
            <div className="col-lg-5">
              <div className="tm-shedule-wrap">
                <div className="tm-shedule">
                  <h3 className="tm-shedule-title">Opening Hours</h3>
                  <ul className="tm-shedule-list">
                    <li>
                      <span>Monday - Friday</span>
                      <span>8:00 - 18:00</span>
                    </li>
                    <li>
                      <span>Saturday</span>
                      <span>9.00 - 18.00</span>
                    </li>
                    <li>
                      <span>Sunday</span>
                      <span>Closed</span>
                    </li>
                  </ul>
                </div>
                {/* .tm-shedule */}
                <div className="empty-space col-md-b40 col-xs-b30" />
                <div className="tm-shedule">
                  <h3 className="tm-shedule-title">Visitors Hours</h3>
                  <ul className="tm-shedule-list">
                    <li>
                      <span>Monday - Friday</span>
                      <span>8:00 - 18:00</span>
                    </li>
                    <li>
                      <span>Saturday</span>
                      <span>9.00 - 18.00</span>
                    </li>
                    <li>
                      <span>Sunday</span>
                      <span>Closed</span>
                    </li>
                  </ul>
                </div>
                {/* .tm-shedule */}
              </div>
            </div>
            {/* .col */}
            <div className="col-lg-7">
              <div className="empty-space col-md-b30 col-xs-b0" />
              <div className="tm-about-wrap tm-hf-hide">
                <div
                  className="tm-about tm-gray-bg wow fadeInRight"
                  data-wow-duration="1s"
                  data-wow-delay="0.1s"
                >
                  <h3 className="tm-about-title">
                    Why People Choose Our <span>Hospital</span>?
                  </h3>
                  <div className="tm-about-text">
                    <p>
                      We provide the best service all over the country. People
                      chose our hospital because of the following advantages.
                    </p>
                    <p>
                      We have a list of associated doctors, Every Department
                      Specialists are availability, Available ambulance
                      facilities, OT/ICU, trauma care is best as always, Our
                      pharmacy is opend 24/7, Our cost is affordable.
                    </p>
                  </div>
                  <div className="empty-space col-xs-b25" />
                  <div className="tm-about-btn">
                    <a href="#" className="tm-btn1">
                      READ MORE
                    </a>
                  </div>
                </div>
              </div>
              <div className="empty-space col-xs-b30" />
            </div>
            {/* .col */}
          </div>
        </div>
        <div className="empty-space col-xs-b60" />
      </div>
    </section>
  );
};

export default About;
