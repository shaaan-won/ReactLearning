import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../assets/css/Hero.css";



const Hero = () => {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 1000,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 3000,
  //   fade: true,
  // };

  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="slider-text">
          <h1 className="tm-headline letters tm-rotate-text">
            Take The world’s <br />
            Best Quality Medical <br />
            Treatment for{" "}
            <span className="tm-words-wrapper tm-rotate-text ">
              <Typewriter
                words={[
                  "DENTAL",
                  "NEUROLOGY",
                  "CRUTCHES",
                  "CARDIOLOGY",
                  "PULMONARY",
                  "X-RAY",
                ]}
                loop={Infinity}
                cursor
                cursorStyle="_"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={2000}
              />
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

      {/* Hero Slider */}
      <div className="hero-slider tm-nam-tm-style1 tm-nam-tm-style2 tm-dots1 tm-dots2 tm-dots3 " >
        <Slider arrows={false} >
          <div>
            <img src="/assets/img/slide-01.jpg" alt="slidedd" />
          </div>
          <div>
            <img src="/assets/img/slide-02.jpg" alt="slide02" />
          </div>
          <div>
            <img src="/assets/img/slide-03.jpg" alt="slide03" />
          </div>
        </Slider>
      </div>

      <div className="hero-overlay" />
      <img
        src="/assets/img/sweet-shap.png"
        alt="Sweet Shap"
        className="sweet-shap"
      />
    </section>
  );
};

export default Hero;
