import React from "react";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="slider-text">
          <h1 className="tm-headline letters tm-rotate-text">
            Take The world’s <br />
            Best Quality Medical <br />
            Treatmen for
            <span className="tm-words-wrapper">
              <b className="is-visible">DENTAL</b>
              <b>NEUROLOGY</b>
              <b>CRUTCHES</b>
              <b>CARDIOLOGY</b>
              <b>PULMONARY</b>
              <b>X-RAY</b>
            </span>
          </h1>
          <div className="empty-space col-sm-b20 col-xs-b10" />
          <p>
            The quality of our service and the professionalism of our staff are
            <br />
            the reason for Trustlife Center’s success.
          </p>
          <div className="empty-space col-md-b55 col-sm-b35 col-xs-b25" />
          <div className="tm-hero-btn">
            <a href="#appointment" className="tm-btn1">
              APPOINTMENT
            </a>
          </div>
        </div>
      </div>
      {/* .container */}
      <div className="tm-hero-slider owl-carousel tm-dots1" id="tm-hero-slider">
        <img src="assets/img/slide-01.jpg" alt="slide-01" />
        <img src="assets/img/slide-02.jpg" alt="slide-02" />
        <img src="assets/img/slide-03.jpg" alt="slide-03" />
      </div>
      <div className="hero-overlay" />
      <img
        src="assets/img/sweet-shap.png"
        alt="Sweet Shap"
        className="sweet-shap"
      />
    </section>
  );
};

export default Hero;
